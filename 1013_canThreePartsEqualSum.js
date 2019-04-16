/**
 * @param {number[]} A
 * @return {boolean}
 */
let canThreePartsEqualSum = function (A) {
  let sum = A.reduce(function(sum, ele) {
    return sum + ele
  })

  if (sum % 3 !== 0) {
    return false
  }

  let part = parseInt(sum / 3, 10)
  let res = 0
  let count = 0

  for (let i = 0; i < A.length; i++) {
    res += A[i]
    if (res === part) {
      count += 1
      res = 0
    }
  }

  return count === 3 ? true : false


}

canThreePartsEqualSum([1, 2, 3, 4])