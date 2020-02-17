class EventEmeitter {
  constructor() {
    this.events = {}
  }
}

  EventEmeitter.prototype.emit = function (type , ...args) {
  console.log('args', args)
  let handler = this.events[type ]
  handler.forEach(fn => {
  fn.apply(this, args)
})
}
  EventEmeitter.prototype.listen = function (type , fn) {
  const handler = this.events[type ]
  if (!handler) {
  this.events[type ] =[]
}
  this.events[type ].push(fn)
}

const emitter = new EventEmeitter()
emitter.listen('son', (man, age) => {
  console.log(`hi, ${man}, ${age}years old`)
})
emitter.emit('son', 'mingyue', 2)