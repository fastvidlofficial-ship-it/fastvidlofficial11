export const metadata = {
  metadataBase: new URL("https://fastvidl.com"),
  title: "Instagram Story Downloader: Save Stories & Highlights in HD | FastVidl",
  description:
    "Easily download Instagram Stories and Highlights in original HD quality. FastVidl provides a secure, anonymous, and watermark-free solution with no login or app installation required. Works seamlessly on iPhone, Android, and PC.",
  alternates: { canonical: "https://fastvidl.com/instagram-story-downloader" },
  openGraph: {
    title: "Instagram Story Downloader: Save Stories & Highlights in HD | FastVidl",
    description:
      "Download Instagram Stories & Highlights in HD — free, anonymous, no watermark. Browser-based for iPhone, Android & PC.",
    url: "https://fastvidl.com/instagram-story-downloader",
    images: ["/assets/weblogo.png"],
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
