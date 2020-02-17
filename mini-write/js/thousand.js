/**
 * 千分位
 * @param {*} num 
 */
function thousand(num) {
  const reg = /(\d)(?=(\d{3})+$)/g
  return num && num.toString().replace(reg, function ($1) {
    return $1 + ','
  })
}

const num = 10000222
const result = thousand(num)
console.log('result: ', result);
