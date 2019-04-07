/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
let isToeplitzMatrix = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i + 1] !== undefined && matrix[i + 1][j + 1] !== undefined) {
        if (matrix[i][j] !== matrix[i + 1][j + 1]) {
          return false
        }
      }

    }

  }
  return true
}

console.log(isToeplitzMatrix([
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2]
]))
