let hammingDistance = function (x, y) {
  // return (x ^ y).toString(2).split('').reduce((sum, ele) => {
  //   return sum + Number(ele)
  // }, 0)

  let z = x ^ y
  let count = 0
  while (z != 0) {
    z = z ^ (z - 1)
    count++
  }
  return count


  // let count = 0
  // while (x !== 0 || y !== 0) {
  //   let d1 = x % 2
  //   let d2 = y % 2

  //   if (d1 !== d2) {
  //     count++
  //   }
  //   x = (x - d1) / 2
  //   y = (y - d2) / 2
  // }
  // // console.log(count)
  // return count
}

let totalHammingDistance = function (nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum += hammingDistance(nums[i], nums[j])
    }
  }
  return sum

}