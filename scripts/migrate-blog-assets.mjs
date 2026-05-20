/**
 * Full blog asset migration: base64 → /public/assets/blogs, blob OG → static PNG, links, meta.
 * Run locally: node scripts/migrate-blog-assets.mjs
 * Commit generated files under public/assets/blogs/ to the repo.
 */
import { writeFile, mkdir, readFile } from "node:fs/promises";
import { readFileSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";
import mongoose from "mongoose";
import { get } from "@vercel/blob";
import { patchBlogLinks } from "../src/lib/blog-link-patches.js";
import { applyBlogMetaOverrides } from "../src/lib/blog-meta-overrides.js";

const ASSETS_DIR = resolve(process.cwd(), "public", "assets", "blogs");
const ASSETS_PREFIX = "/assets/blogs";
const BASE64_IMG_RE =
  /<img([^>]*?)\ssrc=["'](data:image\/(?:png|jpeg|jpg|gif|webp);base64,[^"']+)["']([^>]*)>/gi;
const LOCALHOST_RE = /https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/gi;

function loadEnv() {
  const envPath = resolve(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m && !process.env[m[1].trim()]) {
      process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
    }
  }
}

loadEnv();

function sanitizeSlug(slug) {
  return String(slug || "post")
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "post";
}

function ogPath(slug) {
  return `${ASSETS_PREFIX}/${sanitizeSlug(slug)}-og.png`;
}

async function writeAsset(name, buffer) {
  await mkdir(ASSETS_DIR, { recursive: true });
  const filePath = join(ASSETS_DIR, name);
  await writeFile(filePath, buffer);
  return `${ASSETS_PREFIX}/${name}`;
}

async function extractBase64Html(html, slug) {
  if (!html) return html;
  let out = html;
  let index = 0;

  for (const match of [...html.matchAll(BASE64_IMG_RE)]) {
    const dataUrl = match[2];
    const mime = dataUrl.match(/^data:image\/(\w+);base64,/i)?.[1] || "png";
    const ext = mime === "jpeg" ? "jpg" : mime;
    try {
      const base64 = dataUrl.split(",")[1];
      if (!base64) {
        out = out.replace(match[0], "");
        continue;
      }
      const buffer = Buffer.from(base64, "base64");
      if (buffer.length > 4.5 * 1024 * 1024) {
        out = out.replace(match[0], "");
        continue;
      }
      const name = `${sanitizeSlug(slug)}-inline-${index++}.${ext}`;
      const url = await writeAsset(name, buffer);
      let tag = match[0].replace(dataUrl, url);
      if (!/\bwidth\s*=/i.test(tag)) {
        tag = tag.replace(/<img/i, '<img width="1200"');
      }
      if (!/\bheight\s*=/i.test(tag)) {
        tag = tag.replace(/<img/i, '<img height="630"');
      }
      out = out.replace(match[0], tag);
    } catch {
      out = out.replace(match[0], "");
    }
  }

  return out.replace(LOCALHOST_RE, "https://fastvidl.com");
}

function blobPathnameFromUrl(url) {
  try {
    if (url.startsWith("/api/blob")) {
      const q = url.split("?")[1] || "";
      const params = new URLSearchParams(q);
      return params.get("pathname") || "";
    }
    const u = new URL(url);
    return u.searchParams.get("pathname") || "";
  } catch {
    return "";
  }
}

async function bufferFromImageField(image, slug) {
  const trimmed = String(image || "").trim();
  if (!trimmed) return null;

  if (trimmed.startsWith("data:image")) {
    const base64 = trimmed.split(",")[1];
    if (!base64) return null;
    return Buffer.from(base64, "base64");
  }

  if (trimmed.includes("/api/blob") || trimmed.startsWith("/api/blob")) {
    const pathname = blobPathnameFromUrl(trimmed);
    if (!pathname?.startsWith("blogs/")) return null;
    try {
      const result = await get(pathname, { access: "private" });
      if (!result?.stream) return null;
      const ab = await new Response(result.stream).arrayBuffer();
      return Buffer.from(ab);
    } catch (e) {
      console.warn(`  Blob fetch failed for ${slug}:`, e.message);
      return null;
    }
  }

  if (/^https?:\/\//i.test(trimmed)) {
    try {
      const res = await fetch(trimmed);
      if (!res.ok) return null;
      return Buffer.from(await res.arrayBuffer());
    } catch {
      return null;
    }
  }

  if (trimmed.startsWith("/uploads/blogs/")) {
    const local = join(process.cwd(), "public", trimmed.replace(/^\//, ""));
    if (existsSync(local)) {
      return readFile(local);
    }
  }

  return null;
}

async function migrateFeaturedImage(slug, image) {
  const safe = sanitizeSlug(slug);
  const ogFile = `${safe}-og.png`;
  const ogFull = join(ASSETS_DIR, ogFile);

  if (existsSync(ogFull)) {
    return ogPath(slug);
  }

  const buffer = await bufferFromImageField(image, slug);
  if (buffer?.length) {
    await writeAsset(ogFile, buffer);
    console.log(`  OG image: ${ogFile} (${buffer.length} bytes)`);
    return ogPath(slug);
  }

  return ogPath(slug);
}

function replaceBlobInHtml(html, slug) {
  const fallback = ogPath(slug);
  return html
    .replace(/src=["']https?:\/\/(?:www\.)?fastvidl\.com\/api\/blob\?pathname=[^"']+["']/gi, `src="${fallback}"`)
    .replace(/src=["']\/api\/blob\?pathname=[^"']+["']/gi, `src="${fallback}"`);
}

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI is required");
  process.exit(1);
}

const BlogSchema = new mongoose.Schema({}, { strict: false, collection: "blogs" });
const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

await mongoose.connect(uri);
const docs = await Blog.find({}).lean();
let updated = 0;

await mkdir(ASSETS_DIR, { recursive: true });

for (const doc of docs) {
  const slug = doc.slug || "post";
  console.log(`Processing: ${slug}`);

  let longDescription = await extractBase64Html(
    String(doc.longDescription || ""),
    slug
  );
  longDescription = replaceBlobInHtml(longDescription, slug);
  longDescription = patchBlogLinks(longDescription, slug);

  const image = await migrateFeaturedImage(slug, doc.image);
  const metaDescription = applyBlogMetaOverrides(slug, doc.metaDescription);

  const set = { longDescription, image, metaDescription };

  if (
    longDescription !== (doc.longDescription || "") ||
    image !== (doc.image || "") ||
    metaDescription !== (doc.metaDescription || "")
  ) {
    await Blog.updateOne({ _id: doc._id }, { $set: set });
    updated++;
    console.log(`  ✓ Updated DB`);
  }
}

console.log(`\nDone. ${updated} of ${docs.length} posts updated.`);
console.log(`Assets saved under: ${ASSETS_DIR}`);
console.log("Commit public/assets/blogs/* to git before deploying.");
await mongoose.disconnect();
