let removeDuplicates = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    const element2 = nums[index+1]
    if (element == element2) {
      nums.splice(index, 1)
      index--
    }
    console.log(nums)     
  }
  return nums
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4]))