/**
 * 判断是否函数
 * 获取参数
 * 执行函数
 */
Function.prototype.myCall = function (obj) {
  if (typeof this !== 'function') throw TypeError('这不是一个函数')
  obj = obj || {}
  const { fn } = obj
  obj.fn = this
  const args = [...arguments].slice(1)
  const result = obj.fn(...args)
  delete obj.fn
  obj.fn = fn
  return result
}

// demo
function add(x, y) {
  return x + y
}
const result = add.myCall(null, 1, 2)
console.log('result: ', result); // 3

Function.prototype.myApply = function (obj, arr) {
  if (typeof this !== 'function') throw TypeError('这不是一个函数')
  obj = obj || {}
  const { fn } = obj
  obj.fn = this
  let result
  if (Array.isArray(arr)) {
    result = obj.fn(...arr)
  } else {
    result = obj.fn()
  }
  obj.fn = fn
  return result
}
const result2 = add.myApply(null, [1, 2])
console.log('result2: ', result2); // 3

/**
 * 返回一个函数
 * 事件中执行
 */
Function.prototype.myBind = function (obj) {
  if (typeof this !== 'function') throw TypeError('这不是一个函数')
  const args = [...arguments].slice(1)
  const that = this
  return function F() {
    console.log('this', this)
    if (this instanceof that) {
      return new that(...args, ...arguments)
    }
    return that.apply(obj, args.concat([...arguments]))
  }
}
const result3 = add.myBind(null, 1)
console.log('result3: ', result3(1));

