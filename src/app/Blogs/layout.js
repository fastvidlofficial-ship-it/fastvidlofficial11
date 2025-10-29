export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'Blog - FastVidl',
  description:
    'Guides, FAQs and how-tos for FastVidl — your Instagram reel downloader. Learn how to download reels, stories and photos in HD.',
  alternates: { canonical: 'https://fastvidl.com/Blogs' },
  openGraph: {
    title: 'Blog - FastVidl',
    description:
      'Guides, FAQs and how-tos for FastVidl — your Instagram reel downloader. Learn how to download reels, stories and photos in HD.',
    url: 'https://fastvidl.com/Blogs',
    images: ['/assets/weblogo.png'],
  },
  robots: { index: true, follow: true },
};

export default function BlogsLayout({ children }) {
  return <>{children}</>;
}
