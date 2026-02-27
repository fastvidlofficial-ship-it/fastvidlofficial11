export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'Free Facebook Video Downloader 2026: Download FB Videos in HD Without Watermark | FastVidl',
  description:
    'Download Facebook videos for free with FastVidl – no watermark, no login, no app needed. Save FB videos in HD 1080p on iPhone, Android & desktop in 5-10 seconds. 100% secure browser-based tool for public videos only.',
  alternates: { canonical: 'https://fastvidl.com/Blogs/free-facebook-video-downloader' },
  openGraph: {
    title: 'Free Facebook Video Downloader 2026: Download FB Videos in HD Without Watermark | FastVidl',
    description:
      'Download Facebook videos for free with FastVidl – no watermark, no login. Save FB videos in HD on any device.',
    url: 'https://fastvidl.com/Blogs/free-facebook-video-downloader',
    images: ['/assets/weblogo.png'],
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
