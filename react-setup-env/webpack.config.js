var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: {        
        index: SRC_DIR + '\\app\\index.js',
        sample: SRC_DIR + '\\app\\sample.js'
    },
    output: {
        path: DIST_DIR + '\\app',
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
		})
    ]
}

module.exports = config;