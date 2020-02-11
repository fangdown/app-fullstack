// 正则表达式
// 构造函数
let reg1:RegExp = new RegExp('fangdown')
console.log(reg1);
let reg2:RegExp = new RegExp('fangdown', 'gi')
console.log(reg2);

// 字面量
let reg3:RegExp= /fangdown/
let reg4:RegExp= /fangdown/gi


// test-存在则返回 true，不存在则返回 false。
let website:string= 'fangdown.cn'
console.log(reg1.test(website))
// exec -返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null

console.log(reg3.exec(website))

