/**
 * 
 * 
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n ）来保存 nums2 中的元素。

示例:

输入:
nums1 = [1,2,3], m = 3
nums2 = [2,5,6]       n = 3

输出: [1,2,2,3,5,6]
 */

const mergeTwoArr = (left, right) => {
  let result = []
  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift())
  }
  return result.concat(left, right)
}
let nums1 = [1, 2, 6, 10, 11, 0, 0, 0]
let nums2 = [2, 5, 6]
console.log(mergeTwoArr(nums1, nums2))
