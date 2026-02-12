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
    ]
  },
}

// module.exports = nextConfig

export default nextConfig;

