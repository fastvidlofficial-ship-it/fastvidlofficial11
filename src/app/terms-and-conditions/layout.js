export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'Terms and Conditions - FastVidl',
  description:
    'Terms and Conditions for FastVidl. Rules governing use of our free Instagram, Pinterest, and Facebook video downloader. Acceptable use, liability, and user responsibilities.',
  alternates: { canonical: 'https://fastvidl.com/terms-and-conditions' },
  openGraph: {
    title: 'Terms and Conditions - FastVidl',
    description: 'Terms and Conditions for FastVidl. Rules governing use of our free video downloader tools.',
    url: 'https://fastvidl.com/terms-and-conditions',
    images: ['/assets/weblogo.png'],
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
