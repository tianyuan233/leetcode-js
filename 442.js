/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  var map = {}
  var res = []
  // nums.forEach(ele => {
  //   if (ele in map) {
  //     map[ele] += 1
  //   } else {
  //     map[ele] = 1
  //   }
  // });
  for (let i = 0; i < nums.length; i++) {
    const ele = array[i]
    if (ele in map) {
      map[ele] += 1
    } else {
      map[ele] = 1
    }

  }
  console.log(map)
  for (var key in map) {
    if (map[key] > 1) {
      res.push(key)
    }
  }
  return res
};


var findDuplicates2 = function (nums) {
  return nums.sort((a, b) => { return a - b })
    .filter((ele, index) => { return ele == nums[index + 1] })
}

console.log(findDuplicates2([4, 3, 2, 7, 8, 2, 3, 1]));

