/**
  * mini版express -中间件
*/
const http = require('http')
const url = require('url')

function createApplication() {
  const app = function (req, res) {
    let currentMethod = req.method.toLowerCase()
    // 当前请求路径
    let { pathname } = url.parse(req.url, true)
    // 迭代次数索引
    let index = 0
    function next() {
      // 如果全部路由数组都不满足，则返回找不到
      if (index === app.routes.length) {
        return res.end(`can not ${currentMethod} ${pathname}`)
      }
      // 处理中间件
      let { path, method, fn } = app.routes[index++]
      if (method === 'middle') {
        // 如果该中间件path是/，匹配全部请求，执行回调；如果相等，执行回调；如果该中间件path被包含在当前请求url中，也执行回调
        if (path === '/' || path === pathname || pathname.startsWith(`${path}/`)) {
          fn(req, res)
        } else {
          next()
        }
      } else {
        if ((path === pathname || path === '*') && (method === currentMethod || method === 'all')) {
          fn(req, res, next)
        } else {
          next()
        }
      }
    }
    // 直接调用next函数，根据路径匹配查找对应回调并执行
    next()
  }
  app.routes = []
  app.use = function (path, fn) {
    if (typeof fn !== 'function') {
      fn = path
      path = '/'
    }
    let layer = {
      method: 'middle',
      path,
      fn
    }
    app.routes.push(layer)
  }
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

  app.all = function (path, fn) {
    let layer = {
      path,
      method: 'all',
      fn
    }
    app.routes.push(layer)
  }
  app.listen = function () {
    const server = http.createServer(app)
    server.listen(...arguments)
    return server
  }
  return app
}

module.exports = createApplication