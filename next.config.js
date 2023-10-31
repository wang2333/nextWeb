/** @type {import('next').NextConfig} */
const path = require("path")

module.exports = {
  reactStrictMode: true,
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
}
