var webpack = require('webpack')
var path = require('path')
var fs = require('fs')

module.exports = {
	entry: {
		iori: './src/index.js'
	},
	output: {
		path: './assets/js',
		filename: '[name].js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			comments: false
		}),
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['latest', 'react', 'babili'],
					plugins: ['transform-runtime', 'styled-jsx/babel']
				}
			}
		]
	}
}
