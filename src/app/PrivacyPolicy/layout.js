export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'Privacy Policy - FastVidl',
  description:
    'Understand how FastVidl handles data, cookies and privacy. Read our privacy policy for details about data collection and user rights.',
  alternates: { canonical: 'https://fastvidl.com/PrivacyPolicy' },
  openGraph: {
    title: 'Privacy Policy - FastVidl',
    description:
      'Understand how FastVidl handles data, cookies and privacy. Read our privacy policy for details about data collection and user rights.',
    url: 'https://fastvidl.com/PrivacyPolicy',
    images: ['/assets/weblogo.png'],
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyLayout({ children }) {
  return <>{children}</>;
}
