const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    main: './src/scripts/main.js',
  },
  output: {
    path: path.resolve(__dirname, '_site'),
    filename: 'main.js'
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: false,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          compress: false,
          output: {
            comments: false,
            beautify: false
          }
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/styles'), // Ensure only styles/main.css is processed
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false, // Add this option to prevent URL handling
            },
          },
          'postcss-loader',
        ],
      },
    ]
  }
};
