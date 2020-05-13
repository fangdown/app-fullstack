/**
 * ajax实现
 * 获取参数
 * 建立XMLHttp对象
 * onreadystatechange函数
 * open
 * send
 * setRequestHeader
 */

function myAjax(options) {
  let {
    method = 'GET',
    params,
    data,
    async = false,
    success,
    error,
    headers
  } = options
  let url =
    options.url +
    (params
      ? Object.keys(params)
          .map(key => key + '=' + params[key])
          .join('$')
      : '')
  let request
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest()
  } else {
    request = new ActiveXObject('Microsoft.XMLHTTP')
  }
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      success && success(request.responseText)
    } else {
      error && error(request.errorText)
    }
  }
  request.open(method, url, async)
  if (headers) {
    Object.keys(headers).forEach(key =>
      request.setRequestHeader(key, headers[key])
    )
  }
  method === 'GET' ? request.send() : request.send(data)
}

// demo
myAjax({
  method: 'GET',
  url: '',
  success: function(data) {
    console.log(data)
  },
  params: {},
  headers: { 'content-type': 'application/json' }
})

module.export = { myAjax }
