const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    host: '0.0.0.0',
    contentBase: resolve('./src'),
    port: 8080,
  },
  entry: ['./src/index.js'],
  output: {
    filename: 'mini-memory.js',
    path: resolve(__dirname, './public'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader', 'postcss-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ['to-string-loader', 'html-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        use: ['file-loader?name=[name].[ext]'],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: './index.html',
      hash: true,
    }),
    new CopyWebpackPlugin([
      {
        from: 'node_modules/@webcomponents/**',
        to: '',
      },
    ]),
  ],
};
