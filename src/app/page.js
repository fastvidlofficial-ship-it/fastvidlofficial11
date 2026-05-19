import HomePageClient from "./HomePageClient";
import LatestBlogsSection from "@/components/latest-blogs/LatestBlogsSection";

const HOME_TITLE = "FastVidl, Free Downloader for Instagram & Facebook";
const HOME_DESCRIPTION =
  "FastVidl is a free online downloader for Instagram Reels, Stories, Photos, Facebook videos, and Pinterest videos. No watermark, no login, no app. Save public media in HD on mobile and desktop.";

export const metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: { canonical: "https://fastvidl.com" },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "https://fastvidl.com",
    images: ["/assets/What is FastVidl.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description:
      "Free downloader for Instagram, Facebook & Pinterest public media. No watermark, no login. Try FastVidl now.",
    images: ["/assets/What is FastVidl.png"],
  },
};

export default function Home() {
  return (
    <>
      <HomePageClient />
      <LatestBlogsSection />
    </>
  );
}
