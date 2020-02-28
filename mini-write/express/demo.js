const express = require('./express')
const app = express()

app.use(function (req, res, next) {
  res.setHeader('content-type', 'text/html;charset=utf-8')
  console.log('start');
  next()
})
app.use('/name', function (req, res, next) {
  console.log('midddle-name');
  next()
})
app.get('/name', function (req, res) {
  console.log('router-name');

  res.end('王五')
})

app.post('/content', function (req, res) {
  res.end('post content')
})
app.listen(3000, 'localhost', () => {
  console.log(`app start in 3000`);
})