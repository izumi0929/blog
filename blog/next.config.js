/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: ""
      }
    ]
  },
  sassOptions: {
    includePaths: ["./src/tokens"],
    prependData: `@import "_tokens.scss";`
  }
}

module.exports = nextConfig
