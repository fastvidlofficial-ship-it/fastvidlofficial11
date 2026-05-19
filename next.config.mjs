/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fastvidl.com",
        pathname: "/api/blob",
      },
      {
        protocol: "https",
        hostname: "www.fastvidl.com",
        pathname: "/api/blob",
      },
    ],
  },
  async redirects() {
    return [
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
      { source: '/AboutUs', destination: '/about-us', permanent: true },
      { source: '/ContactUs', destination: '/contact-us', permanent: true },
      { source: '/PrivacyPolicy', destination: '/privacy-policy', permanent: true },
      { source: '/TermsAndConditions', destination: '/terms-and-conditions', permanent: true },
      { source: '/CookiePolicy', destination: '/cookie-policy', permanent: true },
      // NOTE: Removed `/Disclaimer -> /disclaimer` redirect.
      // Next.js 16 matches redirect sources case-insensitively, so this rule
      // also caught lowercase `/disclaimer` and redirected it to itself,
      // creating an infinite HTTP 308 loop (ERR_TOO_MANY_REDIRECTS).
      // Single-word PascalCase paths like `/Disclaimer` are now resolved
      // by Next.js routing directly to the `/disclaimer` page, no redirect needed.
      // Retired page: send old links to Story downloader (also supports highlight URLs in-app)
      { source: '/instagram-highlights-downloader', destination: '/instagram-story-downloader', permanent: true },
      { source: '/Blogs/instagram-highlights-downloader', destination: '/instagram-story-downloader', permanent: true },
      // Remove /Blogs from URL: redirect to home or corresponding downloader page
      { source: '/Blogs/instagram-reel-downloader-free', destination: '/instagram-reel-downloader-free', permanent: true },
      { source: '/Blogs/instagram', destination: '/', permanent: true },
      { source: '/Blogs/free-facebook-video-downloader', destination: '/free-facebook-video-downloader', permanent: true },
      { source: '/Blogs/pinterest-video-downloader-free', destination: '/pinterest-video-downloader-free', permanent: true },
      { source: '/Blogs/instagram-story-downloader', destination: '/instagram-story-downloader', permanent: true },
      { source: '/Blogs/instagram-photo-downloader-free', destination: '/instagram-photo-downloader-free', permanent: true },
      // NOTE: Removed `/Blogs -> /` redirect.
      // Next.js 16 matches redirect sources case-insensitively, so this rule
      // also caught the new lowercase `/blogs` listing page and bounced
      // visitors to the homepage. Since `/blogs` is now a real route, the
      // PascalCase `/Blogs` URL is naturally handled by Next.js routing.
      // Common typo from spec
      { source: '/admin-dashboard/blogs-managemengt', destination: '/admin-dashboard/blogs-management', permanent: false },
    ]
  },
}

// module.exports = nextConfig

export default nextConfig;

