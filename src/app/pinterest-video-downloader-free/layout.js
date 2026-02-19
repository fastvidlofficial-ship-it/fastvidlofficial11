export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'Pinterest Video Downloader Free – Save Pins No Watermark | FastVidl',
  description:
    'Download Pinterest videos free with FastVidl – no watermark, no login required, no software to install. Save pins in HD 1080p on any device instantly. Secure, browser-based Pinterest video saver for public content only.',
  alternates: { canonical: 'https://fastvidl.com/pinterest-video-downloader-free' },
  openGraph: {
    title: 'Pinterest Video Downloader Free – Save Pins No Watermark | FastVidl',
    description:
      'Download Pinterest videos free with FastVidl – no watermark, no login, no install. Save pins in HD on any device. Browser-based, secure.',
    url: 'https://fastvidl.com/pinterest-video-downloader-free',
    images: ['/assets/weblogo.png'],
  },
  robots: { index: true, follow: true },
};

export default function PinterestVideoDownloaderLayout({ children }) {
  return <>{children}</>;
}
