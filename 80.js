/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var res = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 2]) {
      nums[res] = nums[i]
      // console.log(res);
      res++
      // console.log(nums);
    }
  }
  return res
};


// removeDuplicates([1,1,1,2,2,3])