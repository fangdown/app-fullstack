/**
 * 两个超大数相加
 * 
 */
var str1 = '123456789987654321';
var str2 = '9995832109876543210';

function addTwoNum(str1, str2) {
  const arr1 = str1.split('').reverse()
  const arr2 = str2.split('').reverse()
  const max = Math.max(arr1.length, arr2.length)
  let arr = []
  let carry = 0
  for (let i = 0; i < max; i++) {
    let tmp = +(arr1[i] || 0) + +(arr2[i] || 0) + carry
    if (tmp > 10) {
      carry = 1
      arr.push(tmp - 10)
    } else {
      arr.push(tmp)
    }
  }
  if (carry > 0) {
    arr.push(carry)
  }
  return arr.reverse().join('')
}
console.log(addTwoNum(str1, str2)); // 10119288899864197531