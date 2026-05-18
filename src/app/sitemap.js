import {
  collectStaticUrlPaths,
  getPublishedBlogsForDiscovery,
  getRouteMetadata,
  toAbsoluteUrl,
} from "@/lib/site-discovery";

/** Re-fetch published blog URLs from MongoDB periodically. */
export const revalidate = 3600;

function toSitemapEntry(urlPath, lastModified) {
  const { changeFrequency, priority } = getRouteMetadata(urlPath);
  return {
    url: toAbsoluteUrl(urlPath),
    lastModified,
    changeFrequency,
    priority,
  };
}

/**
 * Next.js App Router sitemap convention.
 *
 * @returns {Promise<import("next").MetadataRoute.Sitemap>}
 */
export default async function sitemap() {
  const buildTime = new Date();
  const [staticPaths, blogs] = await Promise.all([
    collectStaticUrlPaths(),
    getPublishedBlogsForDiscovery(),
  ]);

  const blogPaths = blogs.map((b) => `/blogs/${b.slug}`);
  const blogLastMod = new Map(
    blogs.map((b) => [
      `/blogs/${b.slug}`,
      b.updatedAt || b.createdAt || buildTime,
    ])
  );

  const allPaths = [...new Set([...staticPaths, ...blogPaths])].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  const seen = new Set();
  const entries = [];

  for (const urlPath of allPaths) {
    const url = toAbsoluteUrl(urlPath);
    if (seen.has(url)) continue;
    seen.add(url);

    const lastModified =
      blogLastMod.get(urlPath) ??
      (urlPath === "/" ? buildTime : buildTime);

    entries.push(toSitemapEntry(urlPath, lastModified));
  }

  return entries;
}
