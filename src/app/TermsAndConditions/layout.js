export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'Terms and Conditions - FastVidl',
  description:
    'Terms and Conditions for FastVidl. Rules governing use of our free Instagram, Pinterest, and Facebook video downloader. Acceptable use, liability, and user responsibilities.',
  alternates: { canonical: 'https://fastvidl.com/TermsAndConditions' },
  openGraph: {
    title: 'Terms and Conditions - FastVidl',
    description: 'Terms and Conditions for FastVidl. Rules governing use of our free video downloader tools.',
    url: 'https://fastvidl.com/TermsAndConditions',
    images: ['/assets/weblogo.png'],
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
