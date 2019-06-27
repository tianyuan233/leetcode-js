var moveZeroes = function (nums) {
  var res = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[res] = nums[i]
      res++
    }
  }
  for (let i = res; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

