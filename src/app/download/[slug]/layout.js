import { getSiteUrl } from "@/lib/site-url";
import { getParentDownloaderPath } from "@/lib/downloader-routes";
import pseoAll from "../../../../pseo-data.json";

const pseoData = (Array.isArray(pseoAll) ? pseoAll : []).filter(
  (item) => item && typeof item.slug === "string" && item.slug.length > 0
);

function countWords(entry) {
  const parts = [
    entry.intro_text,
    entry.how_to_use,
    entry.meta_desc,
    entry.richContent?.whyBody,
    entry.richContent?.useCasesBody,
    entry.richContent?.tipsBody,
    entry.richContent?.comparisonBody,
    ...(entry.richContent?.features?.map((f) => `${f.heading} ${f.detail}`) || []),
    ...(entry.faqs?.map((f) => `${f.question} ${f.answer}`) || []),
  ];
  const text = parts.filter(Boolean).join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

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
  const wordCount = countWords(entry);
  const thinPage = wordCount < 300;

  return {
    title,
    description,
    alternates: { canonical },
    robots: thinPage
      ? { index: false, follow: true }
      : { index: true, follow: true },
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
