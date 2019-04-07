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
  let map = new Map()
  nums.forEach(element => {
    if (!map.has(element)) {
      map.set(element, 1)
    } else {
      map.set(element, map.get(element) + 1)
    }
  })

  // map.forEach((value, key) => {
  //   if (value > nums.length / 2) {
  //     console.log(key)

  //   }
  // })
  for (let [k, v] of map.entries()) {
    if (v > nums.length / 2) {
      return k
    }
  }
}
console.log(majorityElement2([3, 2, 3]))

// majorityElement2([3, 2, 3])

