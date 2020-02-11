// 类的声明和使用
class XiaoJieJie{
  name: string;
  age:number;
  constructor(name:string, age:number){
    this.name = name
    this.age= age
  }
  say(){
    console.log(`${this.name}-${this.age}, 你喜欢吗`)
  }
}

let xjj:XiaoJieJie = new XiaoJieJie('小妮', 18)

console.log(xjj)
xjj.say()