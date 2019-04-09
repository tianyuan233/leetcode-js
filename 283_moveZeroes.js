/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function (nums) {
  let zeros = 0
  let head = 0

  while (head < nums.length - zeros) {
    if (nums[head] === 0) {
      nums.push(nums.splice(head, 1))
      zeros++
    } else {
      head++
    }
  }
  return nums

}



moveZeroes([0, 1, 0, 3, 12])