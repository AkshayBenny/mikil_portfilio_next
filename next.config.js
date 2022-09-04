/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
