/** Old locale-prefixed URLs (e.g. /en/AboutUs) → same path without prefix */
const LOCALE_PREFIXES = [
  "en",
  "vi",
  "ar",
  "cs",
  "de",
  "es",
  "fr",
  "hi",
  "id",
  "it",
  "ja",
  "ko",
  "pl",
  "pt",
  "ro",
  "ru",
  "th",
  "tr",
  "uk",
  "ur",
  "zh-hans",
  "zh-hant",
];

const localeToRootRedirects = LOCALE_PREFIXES.flatMap((loc) => [
  { source: `/${loc}`, destination: "/", permanent: true },
  { source: `/${loc}/:path*`, destination: "/:path*", permanent: true },
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      ...localeToRootRedirects,
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.fastvidl.com',
          },
        ],
        destination: 'https://fastvidl.com/:path*',
        permanent: true,
      },
      // Retired page: send old links to Story downloader (also supports highlight URLs in-app)
      { source: '/instagram-highlights-downloader', destination: '/instagram-story-downloader', permanent: true },
      { source: '/Blogs/instagram-highlights-downloader', destination: '/instagram-story-downloader', permanent: true },
      // Remove /Blogs from URL: redirect to home or corresponding downloader page
      { source: '/Blogs/instagram-reel-downloader-free', destination: '/instagram-reel-downloader-free', permanent: true },
      { source: '/Blogs/instagram', destination: '/', permanent: true },
      { source: '/Blogs/free-facebook-video-downloader', destination: '/free-facebook-video-downloader', permanent: true },
      { source: '/Blogs/pinterest-video-downloader-free', destination: '/pinterest-video-downloader-free', permanent: true },
      { source: '/Blogs/instagram-story-downloader', destination: '/instagram-story-downloader', permanent: true },
      { source: '/Blogs/instagram-photo-downloader', destination: '/instagram-photo-downloader', permanent: true },
      { source: '/Blogs', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig;

