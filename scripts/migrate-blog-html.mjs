/**
 * Migrate stored blogs: remove base64 inline images and fix localhost URLs.
 * Run: node scripts/migrate-blog-html.mjs
 * Requires MONGODB_URI (reads .env.local if present).
 */
import { readFileSync, existsSync, writeFile, mkdir } from "node:fs/promises";
import { readFileSync as readSync } from "node:fs";
import { resolve, join } from "node:path";
import crypto from "node:crypto";
import mongoose from "mongoose";

const PRODUCTION = "https://fastvidl.com";
const UPLOAD_DIR = resolve(process.cwd(), "public", "uploads", "blogs");
const PUBLIC_PREFIX = "/uploads/blogs";
const BASE64_IMG_RE =
  /<img([^>]*?)\ssrc=["'](data:image\/(?:png|jpeg|jpg|gif|webp);base64,[^"']+)["']([^>]*)>/gi;
const LOCALHOST_RE = /https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/gi;

const envPath = resolve(process.cwd(), ".env.local");
if (existsSync(envPath)) {
  for (const line of readSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m && !process.env[m[1].trim()]) {
      process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
    }
  }
}

async function extractBase64(html, slug) {
  if (!html) return html;
  let out = html;
  let index = 0;
  for (const match of [...html.matchAll(BASE64_IMG_RE)]) {
    const dataUrl = match[2];
    const mime = dataUrl.match(/^data:image\/(\w+);base64,/i)?.[1] || "png";
    const ext = mime === "jpeg" ? "jpg" : mime;
    try {
      const base64 = dataUrl.split(",")[1];
      if (!base64) continue;
      const buffer = Buffer.from(base64, "base64");
      if (buffer.length > 4.5 * 1024 * 1024) {
        out = out.replace(match[0], "");
        continue;
      }
      await mkdir(UPLOAD_DIR, { recursive: true });
      const safeSlug = String(slug).toLowerCase().replace(/[^a-z0-9-]+/g, "-").slice(0, 40);
      const name = `${safeSlug}-inline-${index++}-${crypto.randomBytes(4).toString("hex")}.${ext}`;
      await writeFile(join(UPLOAD_DIR, name), buffer);
      out = out.replace(dataUrl, `${PUBLIC_PREFIX}/${name}`);
    } catch {
      out = out.replace(match[0], "");
    }
  }
  return out.replace(LOCALHOST_RE, PRODUCTION);
}

function normalizeImage(url) {
  if (!url || url.startsWith("data:")) return "";
  if (/^https?:\/\//i.test(url)) {
    return url.replace(LOCALHOST_RE, PRODUCTION);
  }
  return url.startsWith("/") ? url : `/${url}`;
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

for (const doc of docs) {
  const slug = doc.slug || "post";
  const longDescription = await extractBase64(
    String(doc.longDescription || ""),
    slug
  );
  const image = normalizeImage(String(doc.image || ""));
  if (
    longDescription !== (doc.longDescription || "") ||
    image !== (doc.image || "")
  ) {
    await Blog.updateOne({ _id: doc._id }, { $set: { longDescription, image } });
    updated++;
    console.log("Updated:", slug);
  }
}

console.log(`Done. ${updated} of ${docs.length} posts updated.`);
await mongoose.disconnect();
