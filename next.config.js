/** @type {import('next').NextConfig} */
const path = require("path")

const basePath = "/zhiyunservice"

module.exports = {
  basePath,
  reactStrictMode: true,
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    unoptimized: true,
  },
}
