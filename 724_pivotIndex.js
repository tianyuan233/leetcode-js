/**
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let left = nums.slice(0, i).reduce(function (sum, ele) {
      return sum + ele
    }, 0)

    let right = nums.slice(i + 1, nums.length).reduce(function (sum, ele) {
      return sum + ele
    }, 0)

    if (left === right) return i
  }
  return -1
}
console.log(pivotIndex([1, 7, 3, 7, 1]))
