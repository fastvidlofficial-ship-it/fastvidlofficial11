export const metadata = {
  metadataBase: new URL("https://fastvidl.com"),
  title: "Best Instagram Photo Downloader Free | Full Size HD JPG",
  description:
    "Discover the best Instagram photo downloader tool to save images in HD and full size. Learn how to download Instagram photos for free in JPG format legally and safely.",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
  },
  alternates: { canonical: "https://fastvidl.com/instagram-photo-downloader" },
  openGraph: {
    title: "Best Instagram Photo Downloader Free | Full Size HD JPG",
    description:
      "Discover the best Instagram photo downloader tool to save images in HD and full size. Learn how to download Instagram photos for free in JPG format legally and safely.",
    url: "https://fastvidl.com/instagram-photo-downloader",
    siteName: "FastVidl",
    images: ["/assets/weblogo.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Instagram Photo Downloader Free | Full Size HD JPG",
    description:
      "Save Instagram photos in HD and full size — free, browser-based. Expert guide to JPG/PNG downloads, privacy, and legal use.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
