/** Production origin used for SEO metadata (never localhost). */
export const PRODUCTION_SITE_URL = "https://fastvidl.com";

/**
 * Canonical site URL for metadata, OG tags, and JSON-LD.
 * Ignores NEXT_PUBLIC_SITE_URL when it points at localhost.
 */
export function getSiteUrl() {
  const env = (process.env.NEXT_PUBLIC_SITE_URL || "")
    .trim()
    .replace(/\/$/, "");

  if (env && !/localhost|127\.0\.0\.1/i.test(env)) {
    return env;
  }

  return PRODUCTION_SITE_URL;
}

/**
 * @param {string | undefined | null} pathOrUrl
 * @param {string} [base]
 * @returns {string | undefined}
 */
export function toAbsoluteUrl(pathOrUrl, base = getSiteUrl()) {
  if (!pathOrUrl) return undefined;

  const value = String(pathOrUrl).trim();
  if (!value || value.startsWith("data:")) return undefined;

  if (/^https?:\/\//i.test(value)) {
    return value.replace(
      /^https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/i,
      base
    );
  }

  const path = value.startsWith("/") ? value : `/${value}`;
  return `${base}${path}`;
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}
