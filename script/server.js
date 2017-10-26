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
var port = process.argv.slice(2)[0] || 3001

var uri = 'http://localhost:' + port

var devMiddleware = webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: WebpackConfig.output.publicPath,
  stats: {
    colors: true
  }
})

app.use(devMiddleware)

// //加载指定目录静态资源 
// var resourcePath = path.resolve(__dirname, '../');
// app.use(express.static(resourcePath))
// //配置任何请求都转到index.html，而index.html会根据React-Router规则去匹配任何一个route
// 这个需要动态修改index.html
// app.get('*', function(req, res) {
//   res.sendFile(path.resolve(resourcePath, 'index.html'))
// })


var staticPath = path.posix.join('/', 'static')
app.use(staticPath, express.static('./static'))

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  
  _resolve()
})


app.listen(port, function () {
  console.log('Server listening on ' + uri + ', Ctrl+C to stop')
})