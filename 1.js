1/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var left = 0
  var right = nums.length - 1
  while (nums[left] + nums[right] !== target) {
    var res = nums[left] + nums[right]
    if (res > target) {
      right--
    } else {
      left++
    }
  }
  return [left,right]

};