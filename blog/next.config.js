const path = require("path")

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
    includePaths: ["./src/scss", path.join(__dirname, "/src/tokens")],
    prependData: `
      @import "index";
      @import "tokens";
    `
  }
}

module.exports = nextConfig
