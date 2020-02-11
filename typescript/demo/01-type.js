"use strict";
// number
var age = 100;
console.log(age);
var height = 1.73;
console.log(height);
// 不会报错
var nan = NaN;
// string
var name1 = 'fangdown';
console.log(name1);
// boolean
var isOk = true;
var isNo = false;
// enum 枚举
var Person;
(function (Person) {
    Person["man"] = "man";
    Person["woman"] = "woman";
})(Person || (Person = {}));
console.log(Person.man);
// any类型  万能
var test = 10;
test = 'any';
test = false;
console.log(test);
