/**
 * @param {number[]} A
 * @return {boolean}
 */
let isMonotonic = function (A) {
  let increase = true
  let decrease = true

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] < A[i + 1]) {
      decrease = false
    }
    if (A[i] > A[i + 1]) {
      increase = false
    }
  }
  return increase || decrease
}

isMonotonic()