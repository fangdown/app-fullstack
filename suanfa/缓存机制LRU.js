/**
 * 运用你所掌握的数据结构，设计和实现一个 LRU (最近最少使用) 缓存机制。它应该支持以下操作：
 * 获取数据 get 和写入数据 put 。

获取数据 get(key) - 如果密钥 ( key ) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1 。
写入数据 put(key, value) - 如果密钥不存在，则写入数据。当缓存容量达到上限时，
它应该在写入新数据之前删除最久未使用的数据，从而为新数据留出空间。
 */
class LRUCache {
  constructor(max) {
    this.max = max
    this.cache = {}
    this.keys = []
  }
  // 取值
  get = (k) => {
    if (this.cache[k]) {
      // 取值要删除旧的， 再放入新的，先进先出
      this.remove(this.keys, k)
      this.keys.push(k)
      return this.cache[k]
    } else {
      return -1
    }
  }
  put = (k, v) => {
    if (this.cache[k]) return
    this.keys.push(k)
    // 如果超了， 删除第一个
    if (this.keys.length > this.max) {
      delete this.cache[this.keys[0]]
      this.keys.shift()
    }
    this.cache[k] = v
  }
  remove = (arr, item) => {
    if (arr.length) {
      const index = arr.indexOf(item)
      if (index > -1) {
        arr.splice(index, 1)
        return
      }
    }
  }
}
