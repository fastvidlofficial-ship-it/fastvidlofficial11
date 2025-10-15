/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ⚠️ Warning: This will completely skip ESLint during builds
    ignoreDuringBuilds: true,
  },
  // output: 'export', // ✅ This enables static export mode (replaces `next export`)
};

export default nextConfig;

