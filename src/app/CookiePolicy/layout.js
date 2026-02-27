export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'Cookie Policy - FastVidl',
  description:
    'FastVidl Cookie Policy. What cookies we use, why we use them, and how you can manage or opt out. GDPR and privacy transparency.',
  alternates: { canonical: 'https://fastvidl.com/CookiePolicy' },
  openGraph: {
    title: 'Cookie Policy - FastVidl',
    description: 'FastVidl Cookie Policy. What cookies we use and how you can manage them.',
    url: 'https://fastvidl.com/CookiePolicy',
    images: ['/assets/weblogo.png'],
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
