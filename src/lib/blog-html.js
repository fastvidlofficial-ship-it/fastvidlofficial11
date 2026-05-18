import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { toAbsoluteUrl } from "@/lib/site-url";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "blogs");
const PUBLIC_PREFIX = "/uploads/blogs";

const BASE64_IMG_RE =
  /<img([^>]*?)\ssrc=["'](data:image\/(?:png|jpeg|jpg|gif|webp);base64,[^"']+)["']([^>]*)>/gi;

const LOCALHOST_RE = /https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/gi;

/**
 * Decode inline base64 images to /uploads/blogs/*.png files (dev + Node runtime).
 * On Vercel without writable disk, strips base64 src to avoid multi-MB HTML.
 */
export async function extractBase64ImagesFromHtml(html, slug = "post") {
  if (!html || typeof html !== "string") return html;

  let index = 0;
  let out = html;
  const matches = [...html.matchAll(BASE64_IMG_RE)];

  if (matches.length === 0) return html;

  const canWrite =
    process.env.NODE_ENV !== "production" || !process.env.VERCEL;

  for (const match of matches) {
    const dataUrl = match[2];
    const mime = dataUrl.match(/^data:image\/(\w+);base64,/i)?.[1] || "png";
    const ext = mime === "jpeg" ? "jpg" : mime;

    if (!canWrite) {
      out = out.replace(match[0], "");
      continue;
    }

    try {
      const base64 = dataUrl.split(",")[1];
      if (!base64) continue;

      const buffer = Buffer.from(base64, "base64");
      if (buffer.length > 4.5 * 1024 * 1024) continue;

      await mkdir(UPLOAD_DIR, { recursive: true });
      const safeSlug = String(slug)
        .toLowerCase()
        .replace(/[^a-z0-9-]+/g, "-")
        .slice(0, 40);
      const name = `${safeSlug}-inline-${index++}-${crypto.randomBytes(4).toString("hex")}.${ext}`;
      await writeFile(path.join(UPLOAD_DIR, name), buffer);

      out = out.replace(dataUrl, `${PUBLIC_PREFIX}/${name}`);
    } catch {
      out = out.replace(dataUrl, "");
    }
  }

  return out;
}

/** Normalize localhost URLs inside HTML and image fields. */
export function normalizeBlogHtml(html) {
  if (!html || typeof html !== "string") return html || "";
  return html.replace(LOCALHOST_RE, "https://fastvidl.com");
}

export function normalizeBlogImageUrl(url) {
  if (!url || typeof url !== "string") return "";
  const trimmed = url.trim();
  if (trimmed.startsWith("data:")) return "";
  return toAbsoluteUrl(trimmed) || trimmed.replace(LOCALHOST_RE, "https://fastvidl.com");
}

/**
 * Full pipeline for stored blog content.
 * @param {string} html
 * @param {string} slug
 */
export async function prepareBlogHtml(html, slug) {
  const step1 = await extractBase64ImagesFromHtml(html, slug);
  return normalizeBlogHtml(step1);
}

/**
 * @param {import('@/models/Blog').default | Record<string, unknown>} blog
 */
export async function normalizeBlogDocument(blog) {
  if (!blog) return blog;

  const slug = String(blog.slug || "post");
  const longDescription = await prepareBlogHtml(
    String(blog.longDescription || ""),
    slug
  );

  return {
    ...blog,
    longDescription,
    image: normalizeBlogImageUrl(blog.image),
  };
}
