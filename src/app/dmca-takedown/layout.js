export const metadata = {
  metadataBase: new URL("https://fastvidl.com"),
  title: "DMCA & Copyright Takedown - FastVidl",
  description:
    "How rights holders can submit a copyright notice for content accessed through FastVidl. Not legal advice.",
  alternates: { canonical: "https://fastvidl.com/dmca-takedown" },
  openGraph: {
    title: "DMCA & Copyright Takedown - FastVidl",
    description:
      "Copyright and DMCA notice process for FastVidl. For rights holders and authorized agents.",
    url: "https://fastvidl.com/dmca-takedown",
    images: ["/assets/weblogo.png"],
  },
  robots: { index: true, follow: true },
};

export default function DmcaTakedownLayout({ children }) {
  return <>{children}</>;
}
