export const metadata = {
  metadataBase: new URL("https://fastvidl.com"),
  title: "Instagram Story Downloader",
  description:
    "Save public Instagram Stories and Highlights in HD from your browser—no FastVidl account, no app install. We do not add a watermark; use only content you are allowed to access and respect Instagram’s Terms.",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
  },
  alternates: { canonical: "https://fastvidl.com/instagram-story-downloader" },
  openGraph: {
    title: "Instagram Story Downloader",
    description:
      "Save public Instagram Stories and Highlights in HD from your browser—no FastVidl account, no app install. We do not add a watermark; use only content you are allowed to access and respect Instagram’s Terms.",
    url: "https://fastvidl.com/instagram-story-downloader",
    siteName: "FastVidl",
    images: ["/assets/weblogo.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Story Downloader",
    description:
      "Download public Instagram Stories and Highlights in HD in your browser—no login to FastVidl, no app. For personal use of public media you may access; no watermark added by our tool.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
