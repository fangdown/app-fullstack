const { fork } = require('child_process')
const child = fork('./child.js')
// child_process.fork()
child.send({ num: 3 })
child.on('message', message => {
  console.log('receive from child process', message.data)
  child.kill()
})
child.on('exit', () => {
  console.log('child process exit')
})
setInterval(() => {
  console.log('continue other code')
}, 1000)
