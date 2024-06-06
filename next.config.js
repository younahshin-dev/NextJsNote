/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname:'images.unsplash.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/product/deleted_forever',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/product/deleted_temp',
        destination: '/products',
        permanent: false,
      }
    ]
  }
};

module.exports = nextConfig
