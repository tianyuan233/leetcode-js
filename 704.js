/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

  if (nums.length === 1) {
    if (nums[0] === target) {
      return 0
    } else {
      return -1
    }
  }

  let left = 0
  let right = nums.length - 1

  while (right - left >= 0) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) {
      right = right - 1
    } else if (nums[mid] < target) {
      left = left + 1
    } else {
      return mid
    }
    console.log(mid);
  }

  return -1
};


search([2, 5], 5)