/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var map = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]]+=1
    }else {
      map[nums[i]] = 1
    }
  }
  console.log(map);
  for (key in map){
    if(map[key] === 1) {
      return key
    }
  }
};

singleNumber([2,2,1])