// 类修饰符
class Xiaojiejie{
  public sex:string
  protected name:string
  private age:number
  public readonly height:number = 188
  public constructor(sex:string,name:string, age:number){
    this.sex = sex
    this.age = age
    this.name = name
  }
  public sayHello(){
    console.log('帅哥好')
  }
  protected sayLove(){
    console.log('我爱你')
  }
}

const xjj2:Xiaojiejie = new Xiaojiejie('女', '孙俪', 18)

xjj2.sayHello()
// xjj2.height =12 报错
// xjj2.sayLove()  报错
// xjj2.name 报错