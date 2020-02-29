const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(require('./controllers'))

app.listen(port, () => {
  console.log(`app is listen on ${port}`);

})