/**
 * @param {number[]} nums
 * @return {number}
 */
// let majorityElement1 = function (nums) {
//   nums.sort((a, b) => a - b)
//   return nums[Math.floor(nums.length / 2)]

// }

// majorityElement1()

let majorityElement2 = function (nums) {
  let map = {}
  var value = nums.length / 2
  for (let i = 0; i < nums.length; i++) {
    let ele = nums[i]
    if(map[ele]) {
      map[ele]+=1
      if (map[ele] > value) {
        return ele
      }
    }else {
      map[ele] = 1
    }
  }

}
console.log(majorityElement2([3, 2, 3]))

// majorityElement2([3, 2, 3])

