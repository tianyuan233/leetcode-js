/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function (nums) {
  // return !([...new Set(nums)].length === nums.length)
  return !(new Set(nums).size === nums.length)
}
console.log(containsDuplicate([1, 1, 2, 3]))