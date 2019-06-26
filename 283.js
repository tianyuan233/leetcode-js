// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function (nums) {
//   var num = []
//   var zero = []

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       zero.push(nums[i])
//     } else {
//       num.push(nums[i])
//     }
//   }
//   console.log(num);
//   console.log(zero);

//   console.log(num.concat(zero))

// };

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var zero = 0
  for (let i = 0; i < nums.length - zero; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      i = i - 1
      zero +=1
      // console.log(nums);
    }
  }
  return nums
};
moveZeroes([0, 0, 3, 12])