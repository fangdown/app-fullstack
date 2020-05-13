/**
 * reduce 实现
 * @param {*} arr 原始数组
 * @param {*} callback 回调函数
 * @param {*} initial 初始值
 */

function myReduce(arr, callback, initial) {
  let i = 0
  let prev = initial === undefined ? arr[i++] : initial
  for (; i < arr.length; i++) {
    prev = callback(prev, arr[i], i, arr)
  }
  return prev
}
// demo
const arr = [1, 2, 3, 4]
myReduce(arr, (prev, current, i, arr) => {
  console.log('prev', prev)
  console.log('current', current)
  console.log('i', i)
  return prev + current
})
module.exports = { myReduce }

console.log('module myModule:', module)
