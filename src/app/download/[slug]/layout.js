import { getSiteUrl } from "@/lib/site-url";
import { getParentDownloaderPath } from "@/lib/downloader-routes";
import pseoAll from "../../../../pseo-data.json";

const pseoData = (Array.isArray(pseoAll) ? pseoAll : []).filter(
  (item) => item && typeof item.slug === "string" && item.slug.length > 0
);

export async function generateMetadata({ params }) {
  const resolved = await Promise.resolve(params);
  const slug = resolved?.slug;
  const entry = pseoData.find((item) => item.slug === slug);

  if (!entry) {
    return { title: "Downloader not found", robots: { index: false } };
  }

  const siteUrl = getSiteUrl();
  const parentPath = getParentDownloaderPath(entry);
  const canonical = `${siteUrl}${parentPath}`;
  const title = entry.meta_title || entry.h1_title || "FastVidl Downloader";
  const description =
    entry.meta_desc ||
    `Free ${entry.platform || ""} ${entry.content_type || ""} downloader on FastVidl.`;
  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: false, follow: true },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/download/${slug}`,
    },
  };
}

export default function DownloadSlugLayout({ children }) {
  return children;
}
