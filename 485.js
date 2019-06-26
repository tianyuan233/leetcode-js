/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var data = nums.join('').split(0)
  var max = 0
  for (let i = 0; i < data.length; i++) {
    max = Math.max(data[i].length,max)
  }
  return max
};