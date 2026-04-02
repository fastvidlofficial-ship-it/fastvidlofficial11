export const metadata = {
  metadataBase: new URL("https://fastvidl.com"),
  title: "Instagram Highlights Downloader: Save Stories in HD & Safe | FastVidl",
  description:
    "Looking for a safe way to save Instagram Highlights? FastVidl allows you to download your favorite memories in HD directly via Safari or Chrome. No login, no ads and 100% free to use.",
  alternates: { canonical: "https://fastvidl.com/instagram-highlights-downloader" },
  openGraph: {
    title: "Instagram Highlights Downloader: Save Stories in HD & Safe | FastVidl",
    description:
      "Save Instagram Highlights in HD — browser-based, no login. Paste your link at fastvidl.com.",
    url: "https://fastvidl.com/instagram-highlights-downloader",
    images: ["/assets/weblogo.png"],
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
