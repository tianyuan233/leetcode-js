/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortedSquares = function (A) {
  return A.map((x) => Math.abs(x))
    .sort((a, b) => a - b)
    .map((x) => Math.pow(x, 2))
}


console.log(sortedSquares([-7, -3, 2, 3, 11]))

