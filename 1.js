1/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = {}
  for (let i = 0; i < nums.length; i++) {
    need = target - nums[i]
    if (need in map) {
      return [map[need],i]
    } else {
      map[nums[i]] = i
    }
    
  }

};

console.log(twoSum([2,7,9,13],11));
