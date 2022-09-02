/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.iphoneincanada.ca', 'upload.wikimedia.org'],
  },
}

module.exports = nextConfig
