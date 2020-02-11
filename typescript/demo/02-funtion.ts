
let age2:number = 18
// 形参定义
function searchXiaoJieJie(age:number):string{
  return `找到了${age}岁的小姐姐`
}
const res = searchXiaoJieJie(age2)
console.log(res)
// 可选参数
function searchXiaoJieJie2(age:number, height?:number){
  let str = `找到了${age}`
  if(height){
    str+=`,${height}身高`
  }
  str+='的小姐姐'
  return str
}
let result = searchXiaoJieJie2(18,170)
console.log(result)
// 解构参数
function searchXiaoJieJie3(...xuqiu:string[]):string{
  let str = `找到了`
  xuqiu.forEach(item=>{
    str+=`${item},`
  })
  str+='的小姐姐'
  return str
}
result = searchXiaoJieJie3('22', '173', '身材好')
console.log(result);
