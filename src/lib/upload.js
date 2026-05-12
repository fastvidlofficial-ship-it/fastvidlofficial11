import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "blogs");
const PUBLIC_PREFIX = "/uploads/blogs";

const ALLOWED_MIME = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

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

/**
 * Persists an uploaded File (from request.formData()) to public/uploads/blogs/
 * and returns the public URL path that can be used directly as <img src>.
 */
export async function saveBlogImage(file) {
  if (!file || typeof file === "string") {
    throw new Error("No file provided");
  }
  if (!ALLOWED_MIME.has(file.type)) {
    throw new Error(`Unsupported image type: ${file.type}`);
  }
  if (file.size > MAX_BYTES) {
    throw new Error(`Image too large (max ${MAX_BYTES / 1024 / 1024} MB)`);
  }

  await mkdir(UPLOAD_DIR, { recursive: true });

  const baseName = slugifyBase(file.name || "image");
  const ext = extFromMime(file.type) || path.extname(file.name || "") || ".bin";
  const stamp = Date.now().toString(36);
  const rand = crypto.randomBytes(4).toString("hex");
  const finalName = `${baseName}-${stamp}-${rand}${ext}`;
  const absPath = path.join(UPLOAD_DIR, finalName);

  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(absPath, buffer);

  return `${PUBLIC_PREFIX}/${finalName}`;
}
