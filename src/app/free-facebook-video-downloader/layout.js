export const metadata = {
  metadataBase: new URL("https://fastvidl.com"),
  title: "Free Facebook Video Downloader",
  description:
    "Download Facebook videos for free with FastVidl – no watermark, no login, no app needed. Save FB videos in HD 1080p on iPhone, Android & desktop in 5–10 seconds. 100% secure browser-based tool for public videos only.",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
  },
  alternates: { canonical: "https://fastvidl.com/free-facebook-video-downloader" },
  openGraph: {
    title: "Free Facebook Video Downloader",
    description:
      "Download Facebook videos for free with FastVidl – no watermark, no login, no app needed. Save FB videos in HD 1080p on iPhone, Android & desktop in 5–10 seconds. 100% secure browser-based tool for public videos only.",
    url: "https://fastvidl.com/free-facebook-video-downloader",
    siteName: "FastVidl",
    images: ["/assets/weblogo.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Facebook Video Downloader",
    description:
      "Download Facebook videos for free with FastVidl – no watermark, no login, no app needed. Save FB videos in HD on any device. Browser-based, secure.",
  },
  robots: { index: true, follow: true },
};

export default function FacebookVideoDownloaderLayout({ children }) {
  return <>{children}</>;
}
