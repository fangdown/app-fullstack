"use strict";
var age2 = 18;
// 形参定义
function searchXiaoJieJie(age) {
    return "\u627E\u5230\u4E86" + age + "\u5C81\u7684\u5C0F\u59D0\u59D0";
}
var res = searchXiaoJieJie(age2);
console.log(res);
// 可选参数
function searchXiaoJieJie2(age, height) {
    var str = "\u627E\u5230\u4E86" + age;
    if (height) {
        str += "," + height + "\u8EAB\u9AD8";
    }
    str += '的小姐姐';
    return str;
}
var result = searchXiaoJieJie2(18, 170);
console.log(result);
// 解构参数
function searchXiaoJieJie3() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var str = "\u627E\u5230\u4E86";
    xuqiu.forEach(function (item) {
        str += item + ",";
    });
    str += '的小姐姐';
    return str;
}
result = searchXiaoJieJie3('22', '173', '身材好');
console.log(result);
