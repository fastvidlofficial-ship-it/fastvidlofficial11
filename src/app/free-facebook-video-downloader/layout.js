export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'Free Facebook Video Downloader – HD No Watermark | FastVidl',
  description:
    'Download Facebook videos for free with FastVidl – no watermark, no login, no app needed. Save FB videos in HD 1080p on iPhone, Android & desktop in 5–10 seconds. 100% secure browser-based tool for public videos only.',
  alternates: { canonical: 'https://fastvidl.com/free-facebook-video-downloader' },
  openGraph: {
    title: 'Free Facebook Video Downloader – HD No Watermark | FastVidl',
    description:
      'Download Facebook videos for free with FastVidl – no watermark, no login, no app needed. Save FB videos in HD on any device. Browser-based, secure.',
    url: 'https://fastvidl.com/free-facebook-video-downloader',
    images: ['/assets/weblogo.png'],
  },
  robots: { index: true, follow: true },
};

export default function FacebookVideoDownloaderLayout({ children }) {
  return <>{children}</>;
}
