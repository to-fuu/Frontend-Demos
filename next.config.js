/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/demo1',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
