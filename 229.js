/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let map = {}
  let res = []
  var value = nums.length / 3
  for (let i = 0; i < nums.length; i++) {
    let ele = nums[i]
    if (map[ele]) {
      map[ele] += 1
    } else {
      map[ele] = 1
    }
    if (map[ele] > value && res.indexOf(ele) == -1) {
      res.push(ele)
    }

  }

  return res
}