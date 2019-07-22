/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let map = nums.reduce((res, ele) => {
    ele in res ? res[ele] += 1 : res[ele] = 1
    return res
  }, {})
  // console.log(map);
  let index = 0
  for (const item in map) {
    for (let i = 0; i < map[item]; i++) {
      nums[index] = Number(item)
      index++
    }
  }
  // console.log(nums)
  return nums
};


// -------------------------------------------------
var sortColors = function (nums) {
  
  // console.log(nums)
  return nums
};



















sortColors([2, 0, 2, 1, 1, 0])