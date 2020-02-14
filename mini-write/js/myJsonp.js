/**
 * jsonp实现
 */

function jsonp() {
  let head = document.getElementsByTagName('head')[0]
  let js = document.createElement('script')
  js.src = 'http://api.fangdown.cn/api/jsonp?a=1&b=2&callback=foo'
  head.appendChild(js)
}

function foo(data) {
  console.log('后台返回data', data);
}

// 后台响应
function testJson(callback, a, b) {
  return `${callback}(${a + b})`
}