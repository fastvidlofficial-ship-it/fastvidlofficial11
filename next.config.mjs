/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/19390/fastvidl.com',
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

// module.exports = nextConfig

export default nextConfig;

