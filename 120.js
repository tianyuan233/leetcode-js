/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    var ele = triangle[i]
    for (let j = 0; j < ele.length; j++) {
      ele[j] = Math.min(triangle[i + 1][j], triangle[i + 1][j+1]) + ele[j]
    }
  }
  return triangle[0][0]
};

minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
])