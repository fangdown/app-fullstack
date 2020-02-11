"use strict";
// 类的声明和使用
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log(this.name + "-" + this.age + ", \u4F60\u559C\u6B22\u5417");
    };
    return XiaoJieJie;
}());
var xjj = new XiaoJieJie('小妮', 18);
console.log(xjj);
xjj.say();
