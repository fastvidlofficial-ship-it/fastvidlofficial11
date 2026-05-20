import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { put } from "@vercel/blob";
import { toAbsoluteUrl } from "@/lib/site-url";
import { patchBlogLinks } from "@/lib/blog-link-patches";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "blogs");
const PUBLIC_PREFIX = "/uploads/blogs";
const MAX_INLINE_IMAGE_BYTES = Math.floor(4.5 * 1024 * 1024);

const BASE64_IMG_RE =
  /<img([^>]*?)\ssrc=["'](data:image\/(?:png|jpeg|jpg|gif|webp);base64,[^"']+)["']([^>]*)>/gi;

const LOCALHOST_RE = /https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/gi;
const SITE_HOST_RE = /^(?:https?:\/\/)?(?:www\.)?fastvidl\.com/i;

/** Add rel/target to external anchors in stored blog HTML. */
export function normalizeExternalLinksInHtml(html) {
  if (!html || typeof html !== "string") return html || "";

  return html.replace(/<a\s+([^>]+)>/gi, (full, attrs) => {
    const hrefMatch = attrs.match(/href\s*=\s*["']([^"']+)["']/i);
    if (!hrefMatch) return full;

    const href = hrefMatch[1].trim();
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("/")
    ) {
      return full;
    }

    const isExternal = /^https?:\/\//i.test(href) && !SITE_HOST_RE.test(href);
    if (!isExternal) return full;

    let nextAttrs = attrs;
    if (!/\btarget\s*=/i.test(nextAttrs)) {
      nextAttrs += ' target="_blank"';
    }
    if (!/\brel\s*=/i.test(nextAttrs)) {
      nextAttrs += ' rel="noopener noreferrer"';
    } else if (!/noopener/i.test(nextAttrs)) {
      nextAttrs = nextAttrs.replace(
        /\brel\s*=\s*["']([^"']*)["']/i,
        (_, rel) => `rel="${rel} noopener noreferrer"`
      );
    }

    return `<a ${nextAttrs}>`;
  });
}

function shouldUseBlobStorage() {
  return !!process.env.BLOB_READ_WRITE_TOKEN;
}

function isPrivateStoreError(err) {
  return (
    typeof err?.message === "string" &&
    err.message.includes("Cannot use public access on a private store")
  );
}

function buildPrivateBlobProxyUrl(pathname) {
  return `/api/blob?pathname=${encodeURIComponent(pathname)}`;
}

function sanitizeSlug(slug) {
  return String(slug || "post")
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "post";
}

async function saveInlineImageToBlob({ buffer, contentType, ext, slug, hash }) {
  const pathname = `blogs/${sanitizeSlug(slug)}-inline-${hash}.${ext}`;

  try {
    const blob = await put(pathname, buffer, {
      access: "public",
      addRandomSuffix: false,
      contentType,
    });
    return blob.url;
  } catch (err) {
    if (!isPrivateStoreError(err)) {
      throw err;
    }

    const blob = await put(pathname, buffer, {
      access: "private",
      addRandomSuffix: false,
      contentType,
    });
    return buildPrivateBlobProxyUrl(blob.pathname);
  }
}

async function saveInlineImageToLocalUploads({ buffer, ext, slug, hash }) {
  await mkdir(UPLOAD_DIR, { recursive: true });
  const name = `${sanitizeSlug(slug)}-inline-${hash}.${ext}`;
  await writeFile(path.join(UPLOAD_DIR, name), buffer);
  return `${PUBLIC_PREFIX}/${name}`;
}

/**
 * Decode inline base64 images into durable image URLs.
 *
 * - With BLOB_READ_WRITE_TOKEN: stores in Vercel Blob (production-safe).
 * - Local dev without Blob: writes to public/uploads/blogs.
 * - Production without Blob: keeps the original base64 image instead of
 *   deleting it, so old posts still render while the env is being fixed.
 */
export async function extractBase64ImagesFromHtml(html, slug = "post") {
  if (!html || typeof html !== "string") return html;

  let out = html;
  const matches = [...html.matchAll(BASE64_IMG_RE)];

  if (matches.length === 0) return html;

  const canWrite =
    process.env.NODE_ENV !== "production" || !process.env.VERCEL;
  const canUploadToBlob = shouldUseBlobStorage();

  for (const match of matches) {
    const dataUrl = match[2];
    const rawMime = dataUrl.match(/^data:image\/(\w+);base64,/i)?.[1] || "png";
    const mime = rawMime === "jpg" ? "jpeg" : rawMime;
    const ext = mime === "jpeg" ? "jpg" : mime;
    const contentType = `image/${mime}`;

    try {
      const base64 = dataUrl.split(",")[1];
      if (!base64) continue;

      const buffer = Buffer.from(base64, "base64");
      if (buffer.length > MAX_INLINE_IMAGE_BYTES) continue;

      const hash = crypto.createHash("sha256").update(buffer).digest("hex").slice(0, 12);
      const imageUrl = canUploadToBlob
        ? await saveInlineImageToBlob({ buffer, contentType, ext, slug, hash })
        : canWrite
          ? await saveInlineImageToLocalUploads({ buffer, ext, slug, hash })
          : dataUrl;

      out = out.replace(dataUrl, imageUrl);
    } catch {
      // Preserve the original data URL if persistent storage has a temporary issue.
      // Showing the image is better than silently deleting article media.
      continue;
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
  const step2 = normalizeBlogHtml(step1);
  const step3 = normalizeExternalLinksInHtml(step2);
  return patchBlogLinks(step3, slug);
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
