/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findDisappearedNumbers = function (nums) {
  let arr = Array.from(new Array(nums.length), (val, index) => index + 1)
  let res = []
  // console.log(arr)

  arr.forEach(element => {
    if (nums.indexOf(element) === -1) {
      // console.log(element)
      res.push(element)
    }
  })
  return res
}

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])