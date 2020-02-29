const fs = require('fs')
const MAX = 3
let index = 0
// cass 验证loop循环
const timeout = setInterval(() => {
  console.log('START: setInterval', 'TIMERS PHASE-' + index);
  if (index < MAX) {
    // timer
    setTimeout(() => {
      console.log('setInterval.setTimeout', 'TIMERS PHASE');
    }, 0);
    fs.readdir('./txt', (err, files) => {
      if (err) throw err
      console.log('fs.readdir() callback,cotains:' + files.length, ' POLL PHASE');

    })
    setImmediate(() => {
      console.log('setInterval.setImmediate', 'CHECK PHASE');
    });
  } else {
    console.log('Max count exceeded, byebye');
    clearInterval(timeout)

  }
  index += 1
  console.log('END: setInterval', 'TIMERS PHASE');
}, 0);

// settimeout-promise顺序

setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(() => {
    console.log('promise1');

  })
}, 0);

setTimeout(() => {
  console.log('timer2');
  Promise.resolve().then(() => {
    console.log('promise2');

  })
}, 0);