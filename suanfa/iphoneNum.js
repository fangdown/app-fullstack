/**
 *
 * @param n int整型 第n天
 * @return int整型
 */
function solution(n) {
  var a = 1 //第 n 天生产手机的数量
  while (n > ((1 + a) * a) / 2) {
    console.log('n', n)
    console.log('((1 + a) * a) / 2', ((1 + a) * a) / 2)
    a = a + 1
  }
  var x = function(i) {
    return ((1 + i) * i) / 2
  }
  var sum = 0 //  n 天生产手机的数量
  for (var i = 1; i < a; i++) {
    sum += ((1 + a - 1) * (a - 1)) / 2 - x(i - 1)
  }
  var num = n - ((1 + a - 1) * (a - 1)) / 2 //  第 n 天生产手机的数量重复了几次
  sum += num * a
  return sum
}
module.exports = {
  solution: solution
}

let result = solution(50)
console.log('result', result)
