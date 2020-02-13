/**
 * 自定义new函数
 * new 返回的是一个函数或{}
 * @param {function} func 
 * 
 */
function MyNew(func) {
  if (typeof func !== 'function') throw TypeError('这不是一个函数')
  let res = {}
  res._proto_ = func.prototype
  let param = Array.prototype.slice.call(arguments, 1)
  let ret = func.apply(res, param)
  // 结果为函数或者对象 返回结果
  if ((['object', 'function'].indexOf(typeof ret) > -1) && ret !== null) {
    return ret
  }
  return res
}

function add(x, y) {
  return x + y
}
function add2(x, y) {
  return function () {
    return x + y
  }
}
// new 一个函数,如果函数返回值不是对象或者函数，则返回值为空对象{}
let a = new add(1, 2)
let ma = MyNew(add, 1, 2)

console.log('a', a)  //a add {} 
// console.log('a', a())  //a add {} 
console.log('ma', ma) // { _proto_: add { } }
// console.log(ma.add(1, 2))

let b = new add2(1, 2)
let mb = MyNew(add2, 1, 2)
console.log('b', b); // [Function]
console.log('mb', mb); //[Function]
console.log(mb()); // 3
