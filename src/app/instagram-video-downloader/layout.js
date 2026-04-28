export const metadata = {
  metadataBase: new URL("https://fastvidl.com"),
  title: "Best Instagram Video Downloader Free | 1080p No Watermark",
  description:
    "Download any Instagram reel or video safely. Use our Instagram video downloader free online to get 1080p HD files anonymously without watermarks. Fast & secure!",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
  },
  alternates: { canonical: "https://fastvidl.com/instagram-video-downloader" },
  openGraph: {
    title: "Best Instagram Video Downloader Free | 1080p No Watermark",
    description:
      "Download any Instagram reel or video safely. Use our Instagram video downloader free online to get 1080p HD files anonymously without watermarks. Fast & secure!",
    url: "https://fastvidl.com/instagram-video-downloader",
    siteName: "FastVidl",
    images: ["/assets/weblogo.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Instagram Video Downloader Free | 1080p No Watermark",
    description:
      "Use FastVidl to download Instagram videos in HD 1080p without watermark. Browser-based, secure, and no app required.",
  },
  robots: { index: true, follow: true },
};

export default function InstagramVideoDownloaderLayout({ children }) {
  return <>{children}</>;
}
