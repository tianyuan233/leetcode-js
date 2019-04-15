/**
 * @param {number[]} nums
 * @return {number}
 */
let findMaxConsecutiveOnes = function (nums) {
  let res = 0
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count += 1
      res = Math.max(res, count)
    } else if (nums[i] === 0) {
      count = 0
    }
  }

  return res

}


findMaxConsecutiveOnes()