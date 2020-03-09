function express() {
  let middlewareList = []
  let app = function(req, res) {
    let i = 0
    function next() {
      let middle = middlewareList[i++]
      if (!middle) return
      middle(req, res, next)
    }
    next()
  }
  app.use = function(cb) {
    middlewareList.push(cb)
  }
  return app
}
module.exports = express
