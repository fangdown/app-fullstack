// 接口

interface Husband{
  sex:string
  insterest:string
}
let myHusband:Husband={
  sex: '男',
  insterest: '小姐姐'
}

interface Husband2{
  sex:string
  insterest:string
  age?:number
}

let myHusband2 = {
  sex: '男',
  insterest:'小姐姐',
  age: 19
}

interface SearchMan {
  (source:string, subString:string):boolean
}

let mySearch:SearchMan

mySearch = function(source:string, subString:string):boolean{
  let flag = source.search(subString)
  return flag != -1
}

console.log(mySearch('高、富、帅', '方'))