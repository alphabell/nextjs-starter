/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // https://nextjs.org/blog/next-13-4#server-actions-alpha
    serverActions: true,
  },
}

module.exports = nextConfig
