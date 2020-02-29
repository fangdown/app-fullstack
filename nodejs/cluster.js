// 创建子线程
const cluster = require('cluster')
const numCpu = require('os').cpus().length;
for (let i = 0; i < numCpu.length; i++) {
  cluster.fork() // 生成新的工作进程，可以使用 IPC 和父进程通信
}

let exec = require('child_process').exec
exec('ls', function (err, stdout, stderr) {
  if (err) throw err
  console.log('stdout', stdout);

})