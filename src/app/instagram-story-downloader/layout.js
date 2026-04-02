export const metadata = {
  metadataBase: new URL("https://fastvidl.com"),
  title: "Instagram Story Downloader",
  description:
    "Easily download Instagram Stories and Highlights in original HD quality. FastVidl provides a secure, anonymous, and watermark-free solution with no login or app installation required. Works seamlessly on iPhone, Android, and PC.",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
  },
  alternates: { canonical: "https://fastvidl.com/instagram-story-downloader" },
  openGraph: {
    title: "Instagram Story Downloader",
    description:
      "Easily download Instagram Stories and Highlights in original HD quality. FastVidl provides a secure, anonymous, and watermark-free solution with no login or app installation required. Works seamlessly on iPhone, Android, and PC.",
    url: "https://fastvidl.com/instagram-story-downloader",
    siteName: "FastVidl",
    images: ["/assets/weblogo.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Story Downloader",
    description:
      "Download Instagram Stories & Highlights in HD — free, anonymous, no watermark. Browser-based for iPhone, Android & PC.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
