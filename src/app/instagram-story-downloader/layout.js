export const metadata = {
  metadataBase: new URL("https://fastvidl.com"),
  title: "Best Instagram Story Downloader | Save Stories with Music in HD",
  description:
    "Looking for a secure Instagram story downloader? Learn how to save others' Instagram stories in your gallery on Android and iPhone with original music and HD quality. Try FastVidl today!",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
  },
  alternates: { canonical: "https://fastvidl.com/instagram-story-downloader" },
  openGraph: {
    title: "Best Instagram Story Downloader | Save Stories with Music in HD",
    description:
      "Looking for a secure Instagram story downloader? Learn how to save others' Instagram stories in your gallery on Android and iPhone with original music and HD quality. Try FastVidl today!",
    url: "https://fastvidl.com/instagram-story-downloader",
    siteName: "FastVidl",
    images: ["/assets/weblogo.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Instagram Story Downloader | Save Stories with Music in HD",
    description:
      "Looking for a secure Instagram story downloader? Learn how to save others' Instagram stories in your gallery on Android and iPhone with original music and HD quality. Try FastVidl today!",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
