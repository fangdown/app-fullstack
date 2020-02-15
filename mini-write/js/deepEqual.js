function deepIsEqual(src, target) {
  if (src === target) return true
  if (src === null || target === null) return src === target
  const type_a = typeof src
  const type_b = typeof target
  if (type_a !== type_b) return false
  const a = Array.isArray(src)
  const b = Array.isArray(target)
  if (a !== b) return false
  return a ? isArrayEqual(src, target) : isObjectEqual(src, target)
}
function isArrayEqual(arr1, arr2) {
  if (!Array.isArray(arr2)) return false
  if (arr1.length !== arr2.length) return false
  let len = arr1.length
  while (len--) {
    if (!deepIsEqual(arr1[len], arr2[len])) return false
    return true
  }
}
function isObjectEqual(obj1, obj2) {
  if (!isObject(obj2) || obj2.nodeType || obj2 === obj2.window) return false
  const arr = Object.keys(obj1)
  for (let i = 0; i < arr.length; i++) {
    if (!deepIsEqual(obj1[arr[i]], obj2[arr[i]])) return false
  }
  return true
}
function isObject(obj) {
  const type = typeof obj
  return (obj && type === 'object' || type === 'function') || false
}

const a = { name: 'a', arr: [1, 2, null] }
const b = { name: 'a', arr: [1, 2, a] }

console.log(deepIsEqual(a, b));
