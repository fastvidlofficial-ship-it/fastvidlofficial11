import { promises as fs } from "node:fs";
import path from "node:path";

async function getPseoDownloadUrls(baseUrl, lastModified) {
  const filePath = path.join(process.cwd(), "pseo-data.json");

  try {
    const raw = await fs.readFile(filePath, "utf8");
    const items = JSON.parse(raw);

    if (!Array.isArray(items)) return [];

    return items
      .filter((item) => item && typeof item.slug === "string" && item.slug.length > 0)
      .map((item) => ({
        url: `${baseUrl}/download/${item.slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.8,
      }));
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const baseUrl = "https://fastvidl.com";
  const lastModified = new Date();
  const pseoDownloadUrls = await getPseoDownloadUrls(baseUrl, lastModified);

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/instagram-reel-downloader-free`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/pinterest-video-downloader-free`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/free-facebook-video-downloader`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/instagram-photo-downloader`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/instagram-story-downloader`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/instagram-video-downloader`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/dmca-takedown`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.55,
    },
    ...pseoDownloadUrls,
  ];
}
