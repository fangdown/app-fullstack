"use strict";
// 类修饰符
var Xiaojiejie = /** @class */ (function () {
    function Xiaojiejie(sex, name, age) {
        this.height = 188;
        this.sex = sex;
        this.age = age;
        this.name = name;
    }
    Xiaojiejie.prototype.sayHello = function () {
        console.log('帅哥好');
    };
    Xiaojiejie.prototype.sayLove = function () {
        console.log('我爱你');
    };
    return Xiaojiejie;
}());
var xjj2 = new Xiaojiejie('女', '孙俪', 18);
xjj2.sayHello();
// xjj2.height =12 报错
// xjj2.sayLove()  报错
// xjj2.name 报错
