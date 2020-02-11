"use strict";
// 正则表达式
// 构造函数
var reg1 = new RegExp('fangdown');
console.log(reg1);
var reg2 = new RegExp('fangdown', 'gi');
console.log(reg2);
// 字面量
var reg3 = /fangdown/;
var reg4 = /fangdown/gi;
// test-存在则返回 true，不存在则返回 false。
var website = 'fangdown.cn';
console.log(reg1.test(website));
// exec -返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null
console.log(reg3.exec(website));
