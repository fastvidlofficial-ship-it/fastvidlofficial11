export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'Contact Us - FastVidl',
  description:
    'Get in touch with FastVidl support for help, feedback, or business inquiries. We are here to help with download issues and questions.',
  alternates: { canonical: 'https://fastvidl.com/ContactUs' },
  openGraph: {
    title: 'Contact Us - FastVidl',
    description:
      'Get in touch with FastVidl support for help, feedback, or business inquiries. We are here to help with download issues and questions.',
    url: 'https://fastvidl.com/ContactUs',
    images: ['/assets/weblogo.png'],
  },
  robots: { index: true, follow: true },
};

export default function ContactUsLayout({ children }) {
  return <>{children}</>;
}
