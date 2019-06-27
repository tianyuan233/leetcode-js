/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var res = 0
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[i-1] ) {
      nums[res++] = nums[i]
    }
  }
  return res
};