;(async function() {
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve('ok')
        reject('error')
      }, 0)
    })
  }
  console.log('aa')

  const data = await fetchData()
    .then(data => [null, data])
    .catch(error => [error, null])
  console.log('data', data)

  const awaitCommon = promise => {
    return promise()
      .then(data => [null, data])
      .catch(error => [error, null])
  }
  const data2 = await awaitCommon(fetchData)
  console.log('data2', data2)
})()
