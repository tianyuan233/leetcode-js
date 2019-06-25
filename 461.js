/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
let hammingDistance = function (x, y) {
  // return (x ^ y).toString(2).split('').reduce((sum, ele) => {
  //   return sum + Number(ele)
  // }, 0)

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


  let z = x ^ y
  let count = 0
  while (z !== 0) {
    z = z & (z - 1)
    count++
  }
  return count
}

console.log(hammingDistance(1, 5))
