/**
 * 定义promise函数，参数为2个函数，成功处理函数， 失败处理函数
 * 执行该传参函数，同步或者异步
 * 执行完成后调用resolve/reject
 * resolve之前使用then, 则把callback放入回调队列，等resolve之后依次执行
 * resolve之后调用then， 则直接执行callback
 */
const PENDDING = 1
const FULFILLED = 2
const REJECTED = 3
function MyPromsie(executor) {
  let self = this
  this.resolveQueue = []
  this.rejectQueue = []
  this.state = PENDDING
  this.val = undefined
  function resolve(val) {
    if (self.state === PENDDING) {
      self.state = FULFILLED
      self.val = val
      console.log('self.resolveQueue', self.resolveQueue)
      self.resolveQueue.forEach(cb => cb(val))
    }
  }
  function reject(err) {
    if (self.state === PENDDING) {
      self.state = REJECTED
      self.val = err
      self.rejectQueue.forEach(cb => cb(err))
    }
  }
  try {
    // 回调是异步执行 函数是同步执行
    executor(resolve, reject)
  } catch (err) {
    reject(err)
  }
}

MyPromsie.prototype.then = function (onResolve, onReject) {
  let self = this
  onResolve = typeof onResolve === 'function' ? onResolve : v => v
  onReject = typeof onReject === 'function' ? onReject : err => { throw err }
  console.log('then-start', self.state)
  if (self.state === FULFILLED) {
    console.log('fulfilled')
    return new MyPromsie(function (resolve, reject) {
      setTimeout(() => {
        try {
          let x = onResolve(self.val)
          if (x instanceof MyPromsie) {
            x.then(resolve)
          } else {
            resolve(x)
          }
        } catch (error) {
          reject(error)
        }
      }, 0);
    })
  }
  if (self.state === REJECTED) {
    return new MyPromsie(function (resolve, reject) {
      setTimeout(() => {
        try {
          let x = onReject(self.val)
          if (x instanceof MyPromsie) {
            x.then(resolve)
          } else {
            resolve(x)
          }
        } catch (error) {
          reject(error)
        }
      }, 0);
    })
  }
  if (self.state === PENDDING) {
    console.log('pendding')
    return new MyPromsie(function (resolve, reject) {
      self.resolveQueue.push(val => {
        try {
          let x = onResolve(val)
          if (x instanceof MyPromsie) {
            x.then(resolve)
          } else {
            resolve(x)
          }
        } catch (error) {
          reject(error)
        }
      })
      self.rejectQueue.push(val => {
        try {
          let x = onResolve(val)
          if (x instanceof MyPromsie) {
            x.then(resolve)
          } else {
            resolve(x)
          }
        } catch (error) {
          reject(error)
        }
      })
    })
  }
}
// 等同于执行then中第二个函数
MyPromsie.prototype.catch = function (onReject) {
  return this.then(null, onReject)
}
// 比较执行且正确执行完的数量
MyPromsie.prototype.all = function (promises) {
  return new MyPromsie(function (resolve, reject) {
    let count = 0
    let result = []
    const len = promises.length
    for (let i = 0; i < len; i++) {
      promises[i].then(val => {
        result[i] = val
        if (++count === len) {
          resolve(result)
        }
      }, error => {
        reject(error)
      })
    }
  })
}
// 执行第一个resolve的
MyPromsie.prototype.race = function (promises) {
  return new MyPromsie(function (resolve, reject) {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}
// 新生成一个promise，执行resolve
MyPromsie.resolve = function (val) {
  return new MyPromsie(function (resolve) {
    resolve(val)
  })
}
// 新生成一个promise，执行resject
MyPromsie.reject = function (error) {
  return new MyPromsie(function (resolve, reject) {
    reject(error)
  })
}


// let p = new Promise(function (resolve) {
//   setTimeout(() => {
//     resolve(1)
//   }, 0);
// })
// p.then(data => console.log(data))


let p1 = new MyPromsie(function (resolve) {
  setTimeout(() => {
    resolve(1)
  }, 0);
})
// console.log(p1)
// setTimeout(() => {
//   console.log(p1);
//   p1.then(data => console.log(data))
// }, 19);

MyPromsie.resolve(2).then(x => console.log(x))