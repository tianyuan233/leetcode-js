/**
 * @param {number[][]} A
 * @return {number[][]}
 */
let transpose = function (A) {
  let res = new Array(A[0].length)

  for (let i = 0; i < A[0].length; i++) {
    res[i] = new Array(A.length)
    for (let j = 0; j < A.length; j++) {
      res[i][j] = A[j][i]

    }
  }
  return res
}

console.log(transpose([
  [1, 2, 3],
  [4, 5, 6]
]))
