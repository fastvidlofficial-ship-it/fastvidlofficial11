import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { put } from "@vercel/blob";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "blogs");
const PUBLIC_PREFIX = "/uploads/blogs";

const ALLOWED_MIME = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);
// Vercel Blob server uploads support up to 4.5 MB per request.
const MAX_BYTES = Math.floor(4.5 * 1024 * 1024);

function extFromMime(mime) {
  switch (mime) {
    case "image/jpeg":
      return ".jpg";
    case "image/png":
      return ".png";
    case "image/webp":
      return ".webp";
    case "image/gif":
      return ".gif";
    case "image/svg+xml":
      return ".svg";
    default:
      return "";
  }
}

function slugifyBase(name) {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "image";
}

function makeUploadError(message, statusCode = 400) {
  const err = new Error(message);
  err.statusCode = statusCode;
  return err;
}

function makeFileName(file) {
  const baseName = slugifyBase(file.name || "image");
  const ext = extFromMime(file.type) || path.extname(file.name || "") || ".bin";
  const stamp = Date.now().toString(36);
  const rand = crypto.randomBytes(4).toString("hex");
  return `${baseName}-${stamp}-${rand}${ext}`;
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

/**
 * Saves an uploaded File and returns a URL that can be used directly in <img src>.
 *
 * Storage strategy:
 * - Production / Vercel: Vercel Blob (persistent and serverless-safe)
 * - Local dev without BLOB_READ_WRITE_TOKEN: fallback to public/uploads/blogs/
 */
export async function saveBlogImage(file) {
  if (!file || typeof file === "string") {
    throw makeUploadError("No file provided");
  }
  if (!ALLOWED_MIME.has(file.type)) {
    throw makeUploadError(`Unsupported image type: ${file.type}`);
  }
  if (file.size > MAX_BYTES) {
    throw makeUploadError("Image too large (max 4.5 MB)");
  }

  const finalName = makeFileName(file);

  if (shouldUseBlobStorage()) {
    const blobPath = `blogs/${finalName}`;

    try {
      const blob = await put(blobPath, file, {
        access: "public",
        addRandomSuffix: false,
        contentType: file.type,
      });
      return blob.url;
    } catch (err) {
      if (!isPrivateStoreError(err)) {
        throw err;
      }

      // The project is connected to a private Blob store. Upload there and
      // return a proxy URL that streams the file back through our own route.
      const blob = await put(blobPath, file, {
        access: "private",
        addRandomSuffix: false,
        contentType: file.type,
      });
      return buildPrivateBlobProxyUrl(blob.pathname);
    }
  }

  if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
    throw makeUploadError(
      "Image uploads require BLOB_READ_WRITE_TOKEN in production.",
      500
    );
  }

  await mkdir(UPLOAD_DIR, { recursive: true });
  const absPath = path.join(UPLOAD_DIR, finalName);

  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(absPath, buffer);

  return `${PUBLIC_PREFIX}/${finalName}`;
}
