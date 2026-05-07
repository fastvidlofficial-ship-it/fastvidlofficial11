import { notFound } from "next/navigation";
import pseoAll from "../../../../pseo-data.json";

const pseoData = (Array.isArray(pseoAll) ? pseoAll : []).filter(
  (item) => item && typeof item.slug === "string" && item.slug.length > 0
);

async function getSlugFromParams(params) {
  const resolvedParams = await Promise.resolve(params);
  return resolvedParams?.slug;
}

export async function generateMetadata({ params }) {
  const slug = await getSlugFromParams(params);
  if (!slug) {
    notFound();
  }

  const entry = pseoData.find((item) => item.slug === slug);

  if (!entry) {
    notFound();
  }

  const canonical = `https://fastvidl.com/download/${entry.slug}`;

  return {
    metadataBase: new URL("https://fastvidl.com"),
    title: entry.meta_title,
    description: entry.meta_desc,
    icons: {
      icon: "/assets/favicon.ico",
      shortcut: "/assets/favicon.ico",
    },
    alternates: { canonical },
    openGraph: {
      title: entry.meta_title,
      description: entry.meta_desc,
      url: canonical,
      siteName: "FastVidl",
      images: ["/assets/weblogo.png"],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: entry.meta_title,
      description: entry.meta_desc,
    },
    robots: { index: true, follow: true },
  };
}

export default function DownloadSlugLayout({ children }) {
  return <>{children}</>;
}
