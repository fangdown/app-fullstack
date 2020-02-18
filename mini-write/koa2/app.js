const KKB = require('./mykoa')
const Router = require('./middlewares/router')
const app = new KKB()
const router = new Router()
// app.use((req, res) => {
//   res.writeHead(200)
//   res.end('hi, kkb')
// })
// app.use(ctx => ctx.body = 'fangdown')
// app.use(async (ctx, next) => {
//   ctx.body = 1
//   setTimeout(() => {
//     ctx.body += '2'
//   }, 1000);
//   await next()
//   ctx.body += '3'
// })
// app.use(async (ctx, next) => {
//   ctx.body += '4'
//   await next()
// })
// app.use(require('./middlewares/interceptor.js'))
router.get('/index', async ctx => {
  console.log('index');
  ctx.body = 'index-content'
})
router.get('/list', async ctx => {
  console.log('list-content');
  ctx.body = 'list-content'
})
router.post('/post', async ctx => {
  console.log('post');
  ctx.body = 'post-content'
})
app.use(router.routes())
app.listen(3000, () => {
  console.log('监听端口3000');
})

function sleep() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000);
  })
}
