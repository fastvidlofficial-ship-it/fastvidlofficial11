export const metadata = {
  metadataBase: new URL("https://fastvidl.com"),
  title: "Instagram Photo Downloader Free | Save HD Images (JPG/PNG) | FastVidl",
  description:
    "Discover the best Instagram photo downloader tool to save images in HD and full size. Learn how to download Instagram photos for free in JPG format legally and safely.",
  alternates: { canonical: "https://fastvidl.com/instagram-photo-downloader" },
  openGraph: {
    title: "Instagram Photo Downloader Free | Save HD Images (JPG/PNG) | FastVidl",
    description:
      "Save Instagram photos in HD and full size — free, browser-based. Expert guide to JPG/PNG downloads, privacy, and legal use.",
    url: "https://fastvidl.com/instagram-photo-downloader",
    images: ["/assets/weblogo.png"],
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
