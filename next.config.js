/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['residenceshakers.wordpress.com'],
  },
}

module.exports = nextConfig
