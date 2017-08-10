var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: {        
        index: SRC_DIR + '\\app\\index.js',
        cart: SRC_DIR + '\\app\\cart.js',
        sample: SRC_DIR + '\\app\\sample.js'
    },
    output: {
        path: BUILD_DIR + '\\app',
        filename: '[name].bundle.js',
        publicPath: '/app/'
    },
    module : {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {                
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
			filename: "[name].css"
		}),
		new CopyWebpackPlugin([
			{ 
				from: path.join(SRC_DIR, '\\css'),
				to: '..\\css'
            },
            { 
				from: path.join(SRC_DIR, '\\fonts'),
				to: '..\\fonts'
            },
            { 
				from: path.join(SRC_DIR, '\\img'),
				to: '..\\img'
            },
            { 
				from: path.join(SRC_DIR, '\\js'),
				to: '..\\js'
            }
		])
    ]
}

module.exports = config;