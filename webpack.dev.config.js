/**
 * webpack dev config
 */

const webpack = require('webpack');
var path = require('path');

const merge = require('webpack-merge'); // 为了将这些配置合并在一起，我们将使用一个名为 webpack-merge 的工具
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 配置html
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); // 打开浏览器 

const baseConfig = require('./webpack.base.config.js');

var port = process.env.PORT || 3001;

module.exports = merge.smart(baseConfig, {
	cache: true,
	devtool: 'source-map',
	performance: {
	  hints: false
	},
	plugins: [
		new webpack.NamedModulesPlugin(), // 开发阶段，热加载HMR 显示相对路径
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }), // 环境变量
		new OpenBrowserPlugin({
      url: `http://localhost:${port}/`
    }),
    new webpack.HotModuleReplacementPlugin(), // 启用HMR
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      inject: true,
      favicon: path.join(__dirname, 'public/logo.png')
    })
	]
})

