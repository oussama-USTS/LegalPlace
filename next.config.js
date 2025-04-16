/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig 