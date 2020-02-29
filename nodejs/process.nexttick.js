Promise.resolve().then(function () {
  console.log('promise');

})
process.nextTick(() => {
  console.log('1');

  process.nextTick(() => {
    console.log(2);

  })
})