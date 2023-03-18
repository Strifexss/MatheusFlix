/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'image.tmdb.org'],
  },
}

module.exports = nextConfig
