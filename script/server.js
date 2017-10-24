/**
 * @type: express + webpack-dev-middleware
 * @cli: npm start
 * @server: localhost:3001
 */

var express = require('express')
var path = require('path')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('../webpack.dev.config.js')

var app = express()

app.use(express.static(__dirname))

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: path.join(__dirname, '/dist/'),
  stats: {
    colors: true
  }
}))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

var port = process.argv.slice(2)[0] || 3001

app.listen(port, function () {
  console.log('Server listening on http://localhost:' + port + ', Ctrl+C to stop')
})