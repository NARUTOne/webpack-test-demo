/**
 * webpack production config
 */

var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //能够删除未引用代码(dead code)的压缩工具(minifier)
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 提取css模块
var OfflinePlugin = require('offline-plugin'); //离线缓存 体验
var FaviconsWebpackPlugin = require('favicons-webpack-plugin'); // webpack favicons 生成

var baseWebpackConfig = require('./webpack.base.config');

var prodConfig = merge.smart(baseConfig, {
	devtool: false,
	plugins: [
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      uglifyOptions: {
        ie8: false, // IE9+
        output: {
          comments: false,
          beautify: false,
        },
        mangle: {
          keep_fnames: true
        },
        compress: {
          warnings: false,
          drop_console: true
        }
      }
    }),
    new webpack.LoaderOptionsPlugin({ // webpack 1.x 升级到webpack 2.x 加载器全局配置
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin({ // 提取出css模块，到公共文件.css
      filename: path.join('dist', '[name].[contenthash:8].css'),
      allChunks: true,
      disable: false,
    }),
    new OfflinePlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, './dist/index.html'),
      template: './index.html',
      inject: true, // 注入
      minify: {
        removeComments: true, //带HTML注释
        collapseWhitespace: true, //文本节点出现的空白而崩溃
        removeAttributeQuotes: true //删除属性引用
      }
    }),
    new FaviconsWebpackPlugin({
      // Your source logo
      logo: 'logo.png',
      // The prefix for all image files (might be a folder or a name)
      prefix: path.join(config.build.assetsSubDirectory, 'icons/'),
      // Emit all stats of the generated icons
      emitStats: false,
      // The name of the json containing all favicon information
      statsFilename: 'iconstats-[hash].json',
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: 'transparent',
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: config.title,
      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    })
	]
});

module.exports = prodConfig;