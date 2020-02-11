// 字面量赋值
let arr1:number[] // 定义number数组
let arr2:Array<string> // 定义字符串数组
let arr3:number[] = []
let arr4:number[] = [1, 2,3, 4]
let arr5:Array<string> = ['fangdown', 'xiaoming']
let arr6:Array<boolean> = [true, false, false]

// 构造函数
let arr7:number[] = new Array()
let arr8:number[] = new Array(1, 2, 3)
let arr9:Array<string> = new Array('fangdown')

// 元组 - 多种类型的集合

let x:[string, number]
x = ['fangdown', 30]
// error
// x = [30, 'fangdown']
