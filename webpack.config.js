const {resolve} = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	entry: ['./src/index.js'],
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, './public'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['to-string-loader', 'css-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				use: ['to-string-loader', 'html-loader'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			filename: 'index.html',
			template: './index.html',
			hash: true
		})
	]
};
