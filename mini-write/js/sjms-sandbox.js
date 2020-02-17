const sandbox = (function () {
  let age = 31
  function sayName(name) {
    console.log(name)
  }
  function sayAge() {
    console.log(age);
  }
  return {
    sayName,
    sayAge
  }
})()

sandbox.sayAge()
sandbox.sayName('fangdown')