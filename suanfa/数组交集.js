// 数组交集
const fn = (n1, n2) => [...new Set(n1.filter((i) => n2.includes(i)))]
console.log(fn([1, 2, 2, 1], [2, 2]))
