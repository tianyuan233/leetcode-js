var removeElement = function (nums, val) {
  var res = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[res] = nums[i]
      res++
      console.log(nums);     
    }
  }
  return res
};

removeElement([3,2,2,3],3)