/**
 * 深拷贝
 * @param {*} src 源
 * @param {*} target 目标 
 */
function deepClone(src, target) {
  if (typeof src === 'object') {
    if (Array.isArray(src)) {
      cloneArray(src, [])
    } else {
      cloneObject(src, {})
    }
  } else {
    target = src
  }
}
/**
 * 对象拷贝
 * @param {*} src 
 * @param {*} target 
 */
function cloneObject(src, target) {
  const keys = Reflect.ownKeys(src)
  let value = null
  for (let key in keys) {
    value = src[key]
    if (Array.isArray(value)) {
      target[key] = cloneArray(value, [])
    } else if (typeof value === 'object') {
      target[key] = cloneObject(value, {})
    } else {
      target[key] = value
    }
  }
}

function cloneArray(src, target) {
  if (!Array.isArray(src)) throw TypeError('不是一个数组')
  for (let item of src) {
    if (Array.isArray(item)) {
      target.push(cloneArray(item, []))
    } else if (typeof item === 'object') {
      target.push(cloneObject(item, {}))
    } else {
      target.push(item)
    }
  }

}


