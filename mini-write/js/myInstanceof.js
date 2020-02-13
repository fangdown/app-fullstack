/**
 * instanceof 原理
 */

function myInstanceof(left, right) {
  while (left) {
    if (left.__proto__ === right.prototype) {
      return true
    }
    // 更改到自身的上一级
    left = left.__proto__
  }
  return false
}
let ret = myInstanceof('hello', function () { }) // false
let ret = myInstanceof('hello', Object) // true
console.log(ret)