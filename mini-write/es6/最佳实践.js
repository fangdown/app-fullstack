// let const
let foo = 'bar'
const FOO = 'BAR'

// template
const template = `this is ${foo}`
let url = `http://www.baidu.com
          ?key=foo`

// arrow function
// 不要使用this
// 不要用在定义原型方法
// 不要用在事件回调

// symbol
const TYPE_VIDEO = Symbol()
const a = Symbol('a')

// Set Map
let arr = [1, 2, 2, 3]
let arr2 = [...new Set(arr)]
const colors = {
  red: ['apple', 'caomei'],
  yellow: ['banana', 'pear']
}
let redFruit = colors['red']
const colorsMap = new Map()
  .set('red', ['apple', 'caomei'])
  .set('yellow', ['banana', 'pear'])
// console.log(colors.red)

// for of

for (const color of redFruit) {
  // console.log(color)
  if (color === 'apple') break
}
for (let item of colorsMap) {
  console.log(item)
}
for (let color of colorsMap.keys()) {
  console.log(color)
}
// class
class Shape {
  constructor(width, height) {
    this._width = width
    this._height = height
  }
  get area() {
    return this._width * this._height
  }
}
const square = new Shape(10, 20)
console.log(square.area)

// Decorator
class Math {
  // 要设置Babel支持
  // @log
  add(a, b) {
    return a + b
  }
}
function log(target, name, descriptor) {
  var oldValue = descriptor.value

  descriptor.value = function(...args) {
    console.log(`Calling ${name} with`, args)
    return oldValue.apply(this, args)
  }

  return descriptor
}

// 函数
// 默认赋值
function doSometing({ x = 1, y = '2' } = {}) {}

// 扩展运算符
// Math.max(...[1, 2, 3])
Array.prototype.slice.call(arr)
// [...arguments]
let [a1, b1] = [1, 2, 3]
console.log('a1', a1)
console.log('b1', b1)
