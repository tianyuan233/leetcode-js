/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 求交集和数组去重
 */
var intersection = function (nums1, nums2) {
  // return Array.from(new Set(nums1.filter(ele => nums2.includes(ele))))
  return [...new Set(nums1.filter(ele => nums2.includes(ele)))]
  // nums1.filter(ele => nums2.includes(ele))
};



console.log(intersection([1, 2, 2, 1], [2, 2]));
