/**
 * webpack base config
 */

var path = require('path');
var webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var baseConfig = {
	target: 'web', //构建目标
	entry: {
		app: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
		publicPath: '/',  //按需加载或外部资源 url
		chunkFilename: '[id].[chunkhash:8].js' //chunk生成的文件名
	},
	module: {
		rules:[
			{
	      test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				include: [path.resolve(__dirname,'src'), path.resolve(__dirname, "public")],
	      use: {
	        loader: 'babel-loader'
	      }
	    },
	    {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
				test: /\.(png|jpe?g|gif|svg|woff|woff2?|eot|ttf|otf)(\?.*)?$/,
				use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
		]
	},
	resolve:{
		extensions: ['.js', '.jsx'],
    alias: {
      public: path.resolve(__dirname, './public'),
    }
	},
	plugins:[
	 	// new CleanWebpackPlugin(['dist']), // 清除 测试dist
		new webpack.NoEmitOnErrorsPlugin() // 2.x以上；编译时出错，跳过，编译后保错
	]
}

module.exports = baseConfig