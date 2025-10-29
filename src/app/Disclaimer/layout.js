export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'Disclaimer - FastVidl',
  description:
    'Important legal information and terms of use for FastVidl. Read the disclaimer before using our Instagram reel downloading service.',
  alternates: { canonical: 'https://fastvidl.com/Disclaimer' },
  openGraph: {
    title: 'Disclaimer - FastVidl',
    description:
      'Important legal information and terms of use for FastVidl. Read the disclaimer before using our Instagram reel downloading service.',
    url: 'https://fastvidl.com/Disclaimer',
    images: ['/assets/weblogo.png'],
  },
  robots: { index: true, follow: true },
};

export default function DisclaimerLayout({ children }) {
  return <>{children}</>;
}
