/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = function(A) {
  return A.indexOf(Math.max(...A))
}

console.log(peakIndexInMountainArray([1, 2, 3, 4, 3, 2]))

