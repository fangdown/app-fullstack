const http = require('http')
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
const app = express()

function middleA(req, res, next) {
  console.log('middleA before next')
  next()
  console.log('middleA after next')
}

function middleB(req, res, next) {
  console.log('middleB before next')
  next()
  console.log('middleB after next')
}

function middleC(req, res, next) {
  console.log('middleC before next')
  next()
  console.log('middleC after next')
}
app.use(middleA)
app.use(middleB)
app.use(middleC)
http.createServer(app).listen(3000, () => {
  console.log('app listen on 3000')
})

//  访问http://localhost:3000
// middleA before next
// middleB before next
// middleC before next
// middleC after next
// middleB after next
// middleA after next
