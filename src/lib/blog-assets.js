/** Static blog image paths under /public/assets/blogs (AdSense-safe, no base64/blob in HTML). */

export const BLOG_ASSETS_PREFIX = "/assets/blogs";

export function sanitizeBlogSlug(slug) {
  return String(slug || "post")
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "post";
}

/** Featured / OG image path for a blog slug. */
export function getBlogOgImagePath(slug) {
  return `${BLOG_ASSETS_PREFIX}/${sanitizeBlogSlug(slug)}-og.png`;
}

/**
 * Normalize stored image field to static asset path when possible.
 * @param {string | null | undefined} url
 * @param {string} [slug]
 */
export function normalizeBlogImageUrl(url, slug) {
  const trimmed = String(url || "").trim();
  const ogPath = slug ? getBlogOgImagePath(slug) : "";

  if (!trimmed || trimmed.startsWith("data:")) {
    return ogPath;
  }

  if (trimmed.includes("/api/blob") && ogPath) {
    return ogPath;
  }

  if (/^https?:\/\//i.test(trimmed)) {
    if (/localhost|127\.0\.0\.1/i.test(trimmed) && ogPath) {
      return ogPath;
    }
    if (trimmed.includes("/api/blob") && ogPath) {
      return ogPath;
    }
    if (trimmed.includes("fastvidl.com") && trimmed.includes("/assets/blogs/")) {
      try {
        return new URL(trimmed).pathname;
      } catch {
        return trimmed;
      }
    }
  }

  if (trimmed.startsWith(BLOG_ASSETS_PREFIX)) {
    return trimmed;
  }

  if (trimmed.startsWith("/uploads/blogs/") && ogPath) {
    return ogPath;
  }

  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export function getBlogOgImageAbsolute(slug, siteUrl = "https://fastvidl.com") {
  const base = siteUrl.replace(/\/$/, "");
  return `${base}${getBlogOgImagePath(slug)}`;
}
