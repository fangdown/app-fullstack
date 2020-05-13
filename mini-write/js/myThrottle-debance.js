/**
 * 节流，每隔一段时间执行一次
 * @param {*} func 执行函数
 * @param {*} delay 延迟时间
 */
function throttle(fn, delay) {
  let prevTime = Date.now()
  return function() {
    let curTime = Date.now()
    if (curTime - prevTime > delay) {
      fn.apply(this, arguments)
      prevTime = curTime
    }
  }
}
// 使用
var throtteScroll = throttle(function() {
  console.log('throtte')
}, 1000)
window.onscroll = throtteScroll
/**
 * 防抖
 * 如有执行就清除以前的定时器
 * @param {*} func
 * @param {*} delay
 */
function myDebance(func, delay) {
  let timer = null
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func(...args)
    }, delay)
  }
}
