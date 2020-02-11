"use strict";
// 三种函数定义
// 函数声明法
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(1, 5));
// 函数表达式
var add2 = function (n1, n2) {
    return n1 + n2;
};
console.log(add2(1, 5));
// 箭头函数
var add3 = function (n1, n2) {
    return n1 + n2;
};
console.log(add3(1, 5));
