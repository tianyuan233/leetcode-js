/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  var sum = 0
  var max = 0
  for (let i = 0; i < nums.length; i++) {
    var temp_sum = sum + nums[i]
    if (temp_sum > 0){
      sum = temp_sum
      max = Math.max(sum,max)
    } else {
      sum = 0
    }
    // console.log(max);
      

  }
  return max
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])