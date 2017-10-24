/**
 * webpack-dev-server
 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var devConfig = require('../webpack.dev.config.js');

const options = {
	hot: true,
  compress: true,
  historyApiFallback: true,
  publicPath: '/dist/',
  watchOptions: {
    ignored: /node_modules/,
  },
  stats: {
    modules: false,
    chunks: false
  }
}

WebpackDevServer.addDevServerEntrypoints(devConfig, options);
const compiler = webpack(devConfig);
const server = new WebpackDevServer(compiler, options);

server.listen(3001, 'localhost', function (err, result) {
  if (err) {
      return console.log(err);
  }
    
  console.log('dev server listening on port 3001');
});