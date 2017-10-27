/**
 * webpack production config
 */

var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //能够删除未引用代码(dead code)的压缩工具(minifier)
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 提取css模块
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var OfflinePlugin = require('offline-plugin'); //离线缓存 体验

var baseWebpackConfig = require('./webpack.base.config');

var prodConfig = merge(baseWebpackConfig, {
  devtool: false,
  module: {
		rules:[
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      }
		]
	},
	plugins: [
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      uglifyOptions: {
        compress: { 
          warnings: false
        }
      }
    }),
    new ExtractTextPlugin({ // 提取出css模块，到公共文件.css
      filename: 'css/[name].[contenthash].css',
      disable: false,
      allChunks: true
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // new OfflinePlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: 'template.html',
      inject: true, // 注入
      favicon: path.join(__dirname, 'public/logo.png'),
      minify: {
        removeComments: true, //带HTML注释
        collapseWhitespace: true, //文本节点出现的空白而崩溃
        removeAttributeQuotes: true //删除属性引用
      }
    })
	]
});

module.exports = prodConfig;