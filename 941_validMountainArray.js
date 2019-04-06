/**
 * @param {number[]} A
 * @return {boolean}
 */
let validMountainArray = function (A) {
  if (A.length < 3) {
    return false
  }

  let left = 0
  let right = A.length - 1

  while (A[left] < A[left + 1]) {
    left++
  }

  while (A[right] < A[right - 1]) {
    right--
  }

  return left === right && left !== 0 && right !== A.length - 1
}


console.log(validMountainArray([1, 2, 3, 2, 1]))
