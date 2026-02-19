export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'Instagram Reel Downloader Free – HD No Watermark | FastVidl',
  description:
    'Download Instagram Reels for free with FastVidl – no watermark, no login, no app installation. Save IG Reels in HD 1080p on iPhone, Android & desktop in seconds. 100% secure, browser-based tool for public reels only.',
  alternates: { canonical: 'https://fastvidl.com/instagram-reel-downloader-free' },
  openGraph: {
    title: 'Instagram Reel Downloader Free – HD No Watermark | FastVidl',
    description:
      'Download Instagram Reels for free with FastVidl – no watermark, no login, no app installation. Save IG Reels in HD 1080p on any device. Browser-based, secure.',
    url: 'https://fastvidl.com/instagram-reel-downloader-free',
    images: ['/assets/weblogo.png'],
  },
  robots: { index: true, follow: true },
};

export default function InstagramReelDownloaderLayout({ children }) {
  return <>{children}</>;
}
