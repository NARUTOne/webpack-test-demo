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

//加载指定目录静态资源
var resourcePath = path.resolve(__dirname, '../');
app.use(express.static(resourcePath))

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: WebpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}))

//配置任何请求都转到index.html，而index.html会根据React-Router规则去匹配任何一个route
app.get('*', function(req, res) {
  res.sendFile(path.resolve(resourcePath, 'index.html'))
})

var port = process.argv.slice(2)[0] || 3001

app.listen(port, function () {
  console.log('Server listening on http://localhost:' + port + ', Ctrl+C to stop')
})