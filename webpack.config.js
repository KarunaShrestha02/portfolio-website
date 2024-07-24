// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Target .css files
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader', // Turns CSS into CommonJS
          'postcss-loader', // Processes CSS with PostCSS
        ],
      },
    ],
  },
  mode: 'development',
};
