const express = require('express')
const app = express()

app.get('/api/userInfo', (req, res) =>{
  res.json({
    name: 'fangdown',
    age:18,
    msg: '欢迎你'
  })
})
app.listen(8082)