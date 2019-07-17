/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {

  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    if (ele > first) {
      third = second
      second = first
      first = ele
    } else if (ele > second && ele !== first) {
      third = second
      second = ele
    } else if (ele > third && ele !== first && ele !== second) {
      third = ele
    }
    // console.log(first, second, third);
  }
  return third == -Infinity ? first : third
};