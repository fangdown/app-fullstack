const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./response')

/**
 * 简易版koa
 * 1 中间件
 * 2 创建上下文
 * 3 compose洋葱模型
 * 
 */
class MyKoa {
  constructor() {
    this.middlewares = []
  }
  listen(...args) {
    const server = http.createServer(async (req, res) => {
      let ctx = this.createContext(req, res)
      // ctx = {
      //   req: 'xx',
      //   request: 'xx',
      //   res: 'xx',
      //   response: 'xx'
      // }
      // this.callback(req, res)
      // this.callback(ctx)
      // console.log('this.middlewares', this.middlewares.length)
      const fn = this.compose(this.middlewares)
      // 执行合成函数，并传入上下文
      await fn(ctx)
      res.end(ctx.body)
    })
    server.listen(...args)
  }
  use(middleware) {
    // 中间件加入
    // console.log('middleware', middleware)
    this.middlewares.push(middleware)
    // this.callback = callback
  }
  // 创建上下文， 把req, res都挂载到ctx, ctx.req 和ctx.request.req都保存
  createContext(req, res) {
    const ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)
    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res
    return ctx
  }
  compose(middlewares) {
    return function (ctx) {
      return dispatch(0)
      function dispatch(i) {
        console.log('执行中间件', i)
        let fn = middlewares[i]
        if (!fn) return Promise.resolve()
        return Promise.resolve(
          fn(ctx, function next() {
            return dispatch(i + 1)
          })
        )
      }
    }
  }
}
module.exports = MyKoa