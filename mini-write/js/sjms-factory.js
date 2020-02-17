function CreatePerson(name, age, sex) {
  const obj = new Object()
  obj.name = name
  obj.age = age
  obj.sex = sex
  obj.sayName = function () {
    return this.name
  }
}

const p1 = new CreatePerson('fangdown', 30, 'man')
console.log('p1: ', p1);
const p2 = new CreatePerson('lulu', 5, 'woman')
console.log('p2: ', p2);