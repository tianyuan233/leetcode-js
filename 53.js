/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    var sum = 0
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j]
      max = Math.max(sum, max)
    }
  }
  return max
};