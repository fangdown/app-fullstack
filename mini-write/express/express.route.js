/**
  * mini版express - 带路由功能
*/
const http = require('http')
const url = require('url')
function createApplication() {
  const app = function (req, res) {
    let m = req.method.toLowerCase()
    let { pathname } = url.parse(req.url, true)
    for (let i = 0; i < app.routes.length; i++) {
      let { path, method, fn } = app.routes[i]
      // 匹配路径或路由
      if ((path === pathname || path === '*') && (method === m || method === 'all')) {
        fn(req, res)
      }
    }
  }
  app.routes = []
  // http.METHODS 获取RESTFUL所有方法
  http.METHODS.forEach(method => {
    method = method.toLocaleLowerCase()
    app[method] = function (path, fn) {
      let layer = {
        path,
        method,
        fn
      }
      app.routes.push(layer)
    }
  })
  // app.get = function (path, fn) {
  //   let layer = {
  //     path,
  //     method: 'get',
  //     fn
  //   }
  app.all = function (path, fn) {
    let layer = {
      path,
      method: 'all',
      fn
    }
    app.routes.push(layer)
  }
  // }
  app.listen = function () {
    const server = http.createServer(app)
    server.listen(...arguments)
    return server
  }
  return app
}

module.exports = createApplication