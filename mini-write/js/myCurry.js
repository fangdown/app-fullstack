/**
 * 柯里化
 * 确定函数的参数个数
 * 参数个数=外层传参+ 执行传参
 * 如果小于总参数则调用call继续curry,返回函数
 * 否则apply执行函数，返回结果值
 * @param {*} fn
 * @param {*} args
 */
function curry(fn, args) {
  var length = fn.length // 函数参数的个数
  var args = args || []
  return function() {
    newArgs = args.concat(Array.prototype.slice.call(arguments))
    if (newArgs.length < length) {
      return curry.call(this, fn, newArgs)
    } else {
      return fn.apply(this, newArgs)
    }
  }
}
function multiFn1(a, b, c) {
  return a * b * c
}

var multi = curry(multiFn1)
let r1 = multi(2)(3)(4)
let r2 = multi(2)(3)
console.log(r1) // 24
console.log(r2) // [Function]
