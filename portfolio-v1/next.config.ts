/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['avatars.githubusercontent.com'],
    unoptimized: true,
  }
}

module.exports = nextConfig