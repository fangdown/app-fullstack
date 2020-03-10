// 斐波那契数
// 除0 1外， 该数等于前两树相加之和
const fib = function(n) {
  let cache = []
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      cache[i] = i
    } else {
      cache[i] = cache[i - 1] + cache[i - 2]
    }
  }
  return cache
}

console.log(fib(10))
