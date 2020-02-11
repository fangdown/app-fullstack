// number
const age:number = 100
console.log(age)

const height:number = 1.73
console.log(height)
// 不会报错
const nan:number = NaN

// string

const name1:string = 'fangdown'
console.log(name1)

// boolean
const isOk:boolean = true
const isNo:boolean = false

// enum 枚举
enum Person{
  man= 'man',
  woman = 'woman'
}
console.log(Person.man)

// any类型  万能
let test:any = 10
test = 'any'
test = false
console.log(test);
