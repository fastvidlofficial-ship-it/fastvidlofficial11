export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'FAQs - FastVidl',
  description:
    'Frequently asked questions about FastVidl, how to download reels, limitations, legal considerations, and troubleshooting tips.',
  alternates: { canonical: 'https://fastvidl.com/faqs' },
  openGraph: {
    title: 'FAQs - FastVidl',
    description:
      'Frequently asked questions about FastVidl, how to download reels, limitations, legal considerations, and troubleshooting tips.',
    url: 'https://fastvidl.com/faqs',
    images: ['/assets/weblogo.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs — Common Questions About FastVidl Downloader",
    description:
      "Find answers to common FastVidl questions about downloading Instagram reels, Facebook videos, Pinterest content, supported platforms, and file quality.",
    images: ["/assets/weblogo.png"],
  },
  robots: { index: true, follow: true },
};

export default function FaqsLayout({ children }) {
  return <>{children}</>;
}
