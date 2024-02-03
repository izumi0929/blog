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
    includePaths: ["./src/tokens", "./src/scss"],
    prependData: `
      @import "_tokens.scss";
      @import "index";
    `
  }
}

module.exports = nextConfig
