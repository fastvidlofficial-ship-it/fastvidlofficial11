import {
  collectSitemapUrlPaths,
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
  const [allPaths, blogs] = await Promise.all([
    collectSitemapUrlPaths(),
    getPublishedBlogsForDiscovery(),
  ]);

  const blogLastMod = new Map(
    blogs.map((b) => [
      `/blogs/${b.slug}`,
      b.updatedAt || b.createdAt || buildTime,
    ])
  );

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
