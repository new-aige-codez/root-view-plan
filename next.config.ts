import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Trailing slash ensures static export paths work on all hosts (Vercel + Hostinger)
  trailingSlash: true,
}

export default nextConfig
