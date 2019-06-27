/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var p = m + n - 1
  m--
  n--

  while(p>=0) {
    if (n<0 ||nums1[m] > nums2[n]) {
      nums1[p] = nums1[m]
      m--
    } else {
      nums1[p] = nums2[n]
      n--
    }
    p--
    // console.log(nums1);
  }
  return nums1
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)