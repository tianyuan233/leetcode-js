/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k < 0) {
    return 0
  }
  var count = 0
  var map = {}
  nums.sort((a, b) => { return b - a })
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {

      const ele1 = nums[i];
      const ele2 = nums[j];

      count++
      if (ele1 - ele2 == k) {
        map[ele1] = ele2
        break
      }
    }
  }
  return Object.keys(map).length
};

console.log(findPairs([3, 1, 4, 1, 5], 2));

