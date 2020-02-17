/**
 * 观察者模式
 * 观察者和发布者紧密相连，直接影响
 */
class Hunter {
  constructor(name, level) {
    this.name = name
    this.level = level
    this.list = []
  }
  subscribe(target, fn) {
    target.list.push(fn)
  }
  publish(money) {
    this.list.forEach(item => item(money))
  }
}

const hunterA = new Hunter('a', 1)
const hunterB = new Hunter('b', 1)
const hunterC = new Hunter('c', 1)

hunterA.subscribe(hunterC, (money) => {
  console.log(`A ：${money < 2000 ? '抱歉， 在忙' : '会帮你'}`)
})
hunterB.subscribe(hunterC, () => {
  console.log('B：会帮助');
})

// hunterC.publish(1000)


/**
 * 发布订阅模式
 * 核心：调度中心HunterCenter
 * 调度中心负责收集订阅者，负责通知订阅者
 * 业务解耦
 */
class HunterCenter {
  types = {};
  subscribe(type, fn) {
    if (!this.types[type]) {
      this.types[type] = []
    }
    this.types[type].push(fn)
  }
  publish(type, money) {
    console.log(`发布${type}任务， 金额${money}`);
    if (!this.types[type]) return
    // 模拟延迟
    setTimeout(() => {
      for (let fn of this.types[type]) {
        fn(money)
      }
    }, 1000);
  }
}
const hunterCenter = new HunterCenter()
class HunterSingle {
  constructor(name, level) {
    this.name = name
    this.level = level
  }
  subscribe(type, fn) {
    hunterCenter.subscribe(type, fn)
  }
  publish(type, money) {
    hunterCenter.publish(type, money)
  }
}

const hunterX = new HunterSingle('X', '2')
const hunterY = new HunterSingle('Y', '2')
const hunterZ = new HunterSingle('Z', '3')
const hunterBoss = new HunterSingle('BOSS', '1')

hunterX.subscribe('老虎', (money) => {
  console.log(`X ：${money < 2000 ? '抱歉， 在忙' : '会帮忙打老虎'}`)
})
hunterY.subscribe('老虎', () => {
  console.log(`Y:会帮忙打老虎`);
})
hunterZ.subscribe('老鼠', () => {
  console.log(`Z:会帮忙打老鼠`);

})
hunterBoss.publish('老虎', 3000)