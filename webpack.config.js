const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    static: resolve(__dirname, 'static'),
  },
  entry: ['./src/index.js'],
  output: {
    filename: 'mini-memory.min.js',
    path: resolve(__dirname, './public'),
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'to-string-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
          'postcss-loader',
        ],
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
  ],
};
