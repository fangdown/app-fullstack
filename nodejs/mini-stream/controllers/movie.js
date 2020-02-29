const express = require('express')
const router = express.Router()

const fs = require('fs')
router.get('/', function (req, res) {
  let path = './video/demo.mp4'
  let stat = fs.statSync(path)
  let fileSize = stat.size
  let range = req.headers.range
  let parts = range.replace(/bytes=/, '').split('-')
  let start = parseInt(parts[0], 10)
  let end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
  let chunkSize = (end - start) + 1
  let file = fs.createReadStream(path, { start, end })
  let head = {
    'content-Range': `bytes ${start}-${end}/${fileSize}`,
    'Accept-Range': 'bytes',
    'content-length': chunkSize,
    'content-type': 'video/mp4'
  }
  res.writeHead(206, head)
  file.pipe(res)
})
module.exports = router