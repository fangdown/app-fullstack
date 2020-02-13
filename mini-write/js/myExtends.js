/**
 * es5 继承
 * 父函数 子函数
 * call实现属性继承
 * 空函数实现原型链继承
 * 子函数原型链等于空函数原型链，空函数原型链等于父函数原型链
 * 更改构造器constructor指向自身
 * @param {*} name 
 */
function Parent(name) {
  this.name = name
}
Parent.prototype.say = function () {
  console.log('es5', this.name)
}

function Child(name, age) {
  Parent.call(this)
  this.age = age
  this.name = name
}
function create(prototype) {
  //  空函数
  function F() { }
  F.prototype = prototype
  return new F()
}
let prototype = create(Parent.prototype)
Child.prototype = prototype
Child.prototype.constructor = Child
let child = new Child('小方', 18)
child.say() // 小方


/**
 * es6 继承
 * 关键点 extends + super
 */

class Parent2 {
  constructor(name) {
    this.name = name
  }
  say() {
    console.log('es6:' + this.name);

  }
}
class Child2 extends Parent2 {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  sayAge() {
    console.log(this.age);

  }
}
let child2 = new Child2('fangdown', 30)
child2.say()
child2.sayAge()