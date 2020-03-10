// 冒泡排序
// 选择排序
// 快速排序
// 插入排序
const arr = [7, 1, 5, 2, 10]

// 冒泡排序
// 循环条件及关系: 要跟后面一个比，最大范围要-i
const sortBubble = arr => {
  for (let i = 0; i < arr.length; i++) {
    // 第二个条件有时候忘记,因为有j+1所以要-1，-i是后面的已经排好了
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}

console.log('冒泡排序', sortBubble(arr))
// 选择排序
// 循环条件及关系:指定一个最小，把后面+1的数据跟最小标记的比
const sortSelect = arr => {
  let len = arr.length
  let minIndex, tmp
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      // 这里写成arr[j]< arr[j+1]
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    tmp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp
  }
  return arr
}
console.log('选择排序', sortSelect(arr))

// 找出基线（中间那个）,
// 循环数组
const sortQuick = arr => {
  let len = arr.length
  if (len <= 1) return arr
  let pivotIndex = Math.floor(len / 2)
  let pivot = arr.slice(pivotIndex, pivotIndex + 1)
  let left = []
  let right = []
  for (let i = 0; i < len; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    // 注意这里的要排除等于pivot
    else if (arr[i] > pivot) right.push(arr[i])
  }
  return sortQuick(left).concat(pivot, sortQuick(right))
}
console.log('快排', sortQuick(arr))

// 插入排序  O(n^2)
// 可以想象插入扑克牌
const sortInsert = arr => {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let tmp = arr[i]
    let j = i
    for (; j > 0; j--) {
      if (tmp > arr[j - 1]) {
        break
      }
      arr[j] = arr[j - 1]
    }
    arr[j] = tmp
  }
  return arr
}
console.log('插入排序', sortInsert(arr))
