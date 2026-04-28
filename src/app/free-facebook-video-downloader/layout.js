export const metadata = {
  metadataBase: new URL("https://fastvidl.com"),
  title: "Free Facebook Video Downloader | 1080p No Watermark (2026)",
  description:
    "Looking for a free Facebook video downloader? Save FB videos and extract MP3 audio directly to your phone or PC in HD 1080p without watermarks.",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
  },
  alternates: { canonical: "https://fastvidl.com/free-facebook-video-downloader" },
  openGraph: {
    title: "Free Facebook Video Downloader | 1080p No Watermark (2026)",
    description:
      "Looking for a free Facebook video downloader? Save FB videos and extract MP3 audio directly to your phone or PC in HD 1080p without watermarks.",
    url: "https://fastvidl.com/free-facebook-video-downloader",
    siteName: "FastVidl",
    images: ["/assets/weblogo.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Facebook Video Downloader | 1080p No Watermark (2026)",
    description:
      "Save FB videos in HD 1080p without watermarks. Use FastVidl on phone or PC—public links, browser-based, no app required.",
  },
  robots: { index: true, follow: true },
};

export default function FacebookVideoDownloaderLayout({ children }) {
  return <>{children}</>;
}
