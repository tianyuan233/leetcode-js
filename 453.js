/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {

  var res = 0
  var min = Math.min(...nums)
  for (let i = 0; i < nums.length; i++) {
    res = res + (nums[i]- min)
  }

  return res
};



minMoves([5,4,3,1,2])