import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { patchBlogLinks } from "@/lib/blog-link-patches";
import {
  sanitizeBlogSlug,
  BLOG_ASSETS_PREFIX,
  normalizeBlogImageUrl,
} from "@/lib/blog-assets";

export { normalizeBlogImageUrl } from "@/lib/blog-assets";

const ASSETS_DIR = path.join(process.cwd(), "public", "assets", "blogs");
const MAX_INLINE_IMAGE_BYTES = Math.floor(4.5 * 1024 * 1024);

const BASE64_IMG_RE =
  /<img([^>]*?)\ssrc=["'](data:image\/(?:png|jpeg|jpg|gif|webp);base64,[^"']+)["']([^>]*)>/gi;

const LOCALHOST_RE = /https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/gi;
const SITE_HOST_RE = /^(?:https?:\/\/)?(?:www\.)?fastvidl\.com/i;
const BLOB_IMG_SRC_RE =
  /src=["']https?:\/\/(?:www\.)?fastvidl\.com\/api\/blob\?pathname=[^"']+["']/gi;
const BLOB_IMG_SRC_REL_RE = /src=["']\/api\/blob\?pathname=[^"']+["']/gi;

function canWriteAssetsToDisk() {
  return !process.env.VERCEL;
}

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

async function saveInlineImageToAssets({ buffer, ext, slug, index }) {
  await mkdir(ASSETS_DIR, { recursive: true });
  const name = `${sanitizeBlogSlug(slug)}-inline-${index}.${ext}`;
  await writeFile(path.join(ASSETS_DIR, name), buffer);
  return `${BLOG_ASSETS_PREFIX}/${name}`;
}

function stripBase64ImgTag(fullMatch) {
  return "";
}

function ensureImgDimensions(imgTag, width = 1200, height = 630) {
  let tag = imgTag;
  if (!/\bwidth\s*=/i.test(tag)) {
    tag = tag.replace(/<img/i, `<img width="${width}"`);
  }
  if (!/\bheight\s*=/i.test(tag)) {
    tag = tag.replace(/<img/i, `<img height="${height}"`);
  }
  if (!/\bloading\s*=/i.test(tag)) {
    tag = tag.replace(/<img/i, '<img loading="lazy"');
  }
  return tag;
}

/**
 * Decode inline base64 images into /public/assets/blogs files (committed to repo).
 * On Vercel (read-only FS): strips base64 img tags so HTML stays crawlable.
 */
export async function extractBase64ImagesFromHtml(html, slug = "post") {
  if (!html || typeof html !== "string") return html;

  let out = html;
  const matches = [...html.matchAll(BASE64_IMG_RE)];
  if (matches.length === 0) return html;

  const canWrite = canWriteAssetsToDisk();
  let index = 0;

  for (const match of matches) {
    const dataUrl = match[2];
    const rawMime = dataUrl.match(/^data:image\/(\w+);base64,/i)?.[1] || "png";
    const mime = rawMime === "jpg" ? "jpeg" : rawMime;
    const ext = mime === "jpeg" ? "jpg" : mime;

    try {
      const base64 = dataUrl.split(",")[1];
      if (!base64) {
        out = out.replace(match[0], "");
        continue;
      }

      const buffer = Buffer.from(base64, "base64");
      if (buffer.length > MAX_INLINE_IMAGE_BYTES) {
        out = out.replace(match[0], "");
        continue;
      }

      if (!canWrite) {
        out = out.replace(match[0], "");
        continue;
      }

      const imageUrl = await saveInlineImageToAssets({
        buffer,
        ext,
        slug,
        index: index++,
      });
      const newTag = ensureImgDimensions(
        match[0].replace(dataUrl, imageUrl)
      );
      out = out.replace(match[0], newTag);
    } catch {
      out = out.replace(match[0], stripBase64ImgTag(match[0]));
    }
  }

  return out;
}

/** Replace blob proxy image URLs with static asset paths. */
export function replaceBlobImagesInHtml(html, slug) {
  if (!html || !slug) return html || "";
  const ogFallback = `${BLOG_ASSETS_PREFIX}/${sanitizeBlogSlug(slug)}-og.png`;
  let out = html;
  out = out.replace(BLOB_IMG_SRC_RE, `src="${ogFallback}"`);
  out = out.replace(BLOB_IMG_SRC_REL_RE, `src="${ogFallback}"`);
  return out;
}

/** Normalize localhost URLs inside HTML. */
export function normalizeBlogHtml(html) {
  if (!html || typeof html !== "string") return html || "";
  return html.replace(LOCALHOST_RE, "https://fastvidl.com");
}

/**
 * Full pipeline for stored blog content.
 * @param {string} html
 * @param {string} slug
 */
export async function prepareBlogHtml(html, slug) {
  const step1 = await extractBase64ImagesFromHtml(html, slug);
  const step2 = replaceBlobImagesInHtml(step1, slug);
  const step3 = normalizeBlogHtml(step2);
  const step4 = normalizeExternalLinksInHtml(step3);
  return patchBlogLinks(step4, slug);
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
    image: normalizeBlogImageUrl(blog.image, slug),
  };
}
