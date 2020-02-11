class Fangdwon{
  name:string
  age:number
  skill:string
  constructor(name:string,age:number,skill:string){
    this.name = name
    this.age = age
    this.skill = skill
  }
  public interest(){
    console.log('找小姐姐');
  }
}

let fangdown:Fangdwon = new Fangdwon('zq',30, 'web')

fangdown.interest()

class ChildFang extends Fangdwon{
  public xingxiang:string = '帅气'
  public zhuanQian(){
    console.log('一天一个亿')
  }
  // 重写父级方法
  public interest(){
    super.interest() // 可加可不加
    console.log('建立电商平台')
  }
}
let xiaofang = new ChildFang('帅气方', 1, 'money')

xiaofang.interest()
xiaofang.zhuanQian()