/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a,b) => a-b)
  let midIndex = Math.floor((nums.length - 1) / 2)
  let sum = 0
  let mid = nums[midIndex]
  for (let i = 0; i < nums.length; i++) {
    sum +=Math.abs(mid-nums[i])
  }
  return sum
};

minMoves2([1,2,3,4])