export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'About Us - FastVidl',
  description:
    'Learn about FastVidl — our mission, features, and why millions trust our Instagram reel downloader for fast, secure downloads.',
  alternates: { canonical: 'https://fastvidl.com/AboutUs' },
  openGraph: {
    title: 'About Us - FastVidl',
    description:
      'Learn about FastVidl — our mission, features, and why millions trust our Instagram reel downloader for fast, secure downloads.',
    url: 'https://fastvidl.com/AboutUs',
    images: ['/assets/weblogo.png'],
  },
  robots: { index: true, follow: true },
};

export default function AboutUsLayout({ children }) {
  return <>{children}</>;
}
