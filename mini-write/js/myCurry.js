function myCurry(fn) {
  var args = [...arguments].slice(1);
  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args); // 没传参数时，调用这个函数
    } else {
      [].push.apply(args, arguments); // 传入了参数，把参数保存下来
      return arguments.callee; // 返回这个函数的引用
    }
  }
}

// demo
function add(x, y) {
  return x + y
}
const result = myCurry(add)
console.log('result: ', result(1)(2)());


function multiFn(a, b, c) {
  return a * b * c;
}
var multi = myCurry(multiFn);
let res = multi(2, 3, 4);
let res1 = multi(2)(3, 4);
console.log('res', res())
console.log('res1: ', res1());