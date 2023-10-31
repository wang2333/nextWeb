/** @type {import('next').NextConfig} */
const path = require("path")

module.exports = {
  reactStrictMode: true,
  output: "out",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
}
