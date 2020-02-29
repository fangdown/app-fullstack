const express = require('express')
const router = express.Router()
router.use('/movie', require('./movie'))
router.get('/', function (req, res) {
  res.render('pages/index', {
    title: 'steam-demo',
    message: 'hello, fangdown'
  })
})

module.exports = router