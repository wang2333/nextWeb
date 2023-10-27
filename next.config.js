const path = require('path');

module.exports = {
  reactStrictMode: true,
  distDir: 'dist',
  // output: 'export',
  basePath: '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  }
};
