const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		bundle: ['./src/index.jsx','./src/_styles/style.scss'],
	},
    output: {
        path: __dirname + "/public",
		filename: 'assets/bundle.js',
		chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx','.css','.scss']
    },
    module: {
		rules: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-1']
				}
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
				  {
					loader: 'file-loader',
					options: {}  
				  }
				]
			}
		]
  },
	plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
		new MiniCssExtractPlugin({
			filename: "[name].css",
      		chunkFilename: "[id].css"
		})
	],
	performance: {
		hints: false,
	},
    devServer: {
		historyApiFallback: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		  }
	},
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}