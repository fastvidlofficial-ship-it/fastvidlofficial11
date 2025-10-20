/** @type {import('next').NextConfig} */
const nextConfig = {
 
  eslint: {
    // ⚠ Warning: This will completely skip ESLint during builds
    ignoreDuringBuilds: true,
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
    ]
  },
}

// module.exports = nextConfig

export default nextConfig;

