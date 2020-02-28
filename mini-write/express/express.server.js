/**
  * mini版express -启动服务
*/
const http = require('http')
const url = require('url')
function createApplication() {
  const app = function (req, res) {
    res.end('hello world')
  }
  app.listen = function () {
    const server = http.createServer(app)
    server.listen(...arguments)
    return server
  }
  return app
}
module.exports = createApplication