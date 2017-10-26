/**
 * webpack-dev-server
 */

var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var devConfig = require('../webpack.dev.config.js');

const options = {
	hot: true,
  compress: true,
  historyApiFallback: true,
  contentBase: path.resolve(__dirname,'dist'),
  publicPath: devConfig.output.publicPat,
  host: 'localhost',
  watchOptions: {
    ignored: /node_modules/,
  },
  stats: {
    modules: false,
    chunks: false,
    colors: true
  }
}

WebpackDevServer.addDevServerEntrypoints(devConfig, options);
const compiler = webpack(devConfig);
const server = new WebpackDevServer(compiler, options);

server.listen(3001, 'localhost', function() {    
  console.log('dev server listening on port 3001');
});