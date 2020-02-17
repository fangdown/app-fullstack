const url = "http://www.taobao.com/index.php?key0=0&key1=&key2=2"
/**
 * 解析url参数
 * @param {*} url 
 */
function queryUrlParams(url) {
  const str = url.split('?')[1]
  const items = str.split('&')
  let obj = {}
  items.forEach(item => {
    let [key, value] = item.split('=')
    obj[key] = value || ''
  })
  return obj
}

const result = queryUrlParams(url)
console.log('result: ', result);