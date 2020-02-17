/**
 * 单例模式
 * 一个对象
 * 利用闭包
 * 对象里有属性和方法，通过方法初始化对象（无则初始化，有则直接返回），获取对象
 */

const single = {
  _singleton: null,
  getSingleton: function (name) {
    if (!this._singleton) {
      this._singleton = {}
      this._singleton.name = []
      this._singleton.name.push(name)
    }
    return this._singleton
  }
}

const s1 = single.getSingleton('s1')
const s2 = single.getSingleton('s2')

console.log('s1', s1) // s1
console.log('s2', s2); // s2


// 高级写法
const Singleton = function (name) {
  this.name = name
}
Singleton.prototype.getName = function () {
  return this.name
}

const getInstance = (function () {
  let instance = null
  return function (name) {
    if (!instance) {
      instance = new Singleton(name)
    }
    return instance
  }
})()