/**
 * 洋葱模型
 * 传入next，调用下一个中间件函数，
 * 等待执行完成后，最先执行完成最后一个函数，再依次执行前一个函数， 实际上就是函数调用栈
 * @param {*} middlewares 
 */
function compose(middlewares) {
  return function () {
    return dispatch(0)
    function dispatch(i) {
      let fn = middlewares[i]
      if (!fn) return Promise.resolve()
      return Promise.resolve(
        fn(function next() {
          console.log('执行下一个中间件')
          return dispatch(i + 1)
        })
      )
    }
  }
}

async function fn1(next) {
  console.log('fn1')
  await next()
  console.log('fn1-end');

}

async function fn2(next) {
  console.log('fn2');
  await delay()
  await next()
  console.log('fn2-end');
}
async function fn3(next) {
  console.log('fn3');
}
async function delay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 2000);
  })
}

const middlewares = [fn1, fn2, fn3]
const finalFn = compose(middlewares)
finalFn()