/**
 * @param {number[]} nums
 * @return {number}
 * 要考虑到数组中有负数的情况
 */
let maximumProduct = function (nums) {
  nums.sort((a, b) => {
    return b - a
  })
  return Math.max(nums[0] * nums[1] * nums[2], nums[nums.length - 1] * nums[nums.length - 2] * nums[0])

}

console.log(maximumProduct([1, 2, 3]))

