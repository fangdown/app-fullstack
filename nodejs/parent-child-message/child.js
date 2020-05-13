function fib(num) {
  if (num === 0) return 0
  if (num === 1) return 1
  return fib(num - 2) + fib(num - 1)
}

process.on('message', message => {
  console.log('child pid', process.pid)
  const { num } = message
  console.log('child-num', num)

  const data = fib(num)
  process.send({ data })
})
process.on('SIGHUP', function() {
  console.log('kill')

  process.exit()
})
