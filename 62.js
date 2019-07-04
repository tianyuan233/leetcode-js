/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  var res = []
  for (let i = 0; i < n; i++) {
    res.push([])
    for (let j = 0; j < m; j++) {
      if (i === 0) {
        res[i].push(1)
      } else if (j===0 && i !== 0) {
        res[i].push(1)
      } else {
        res[i].push(res[i-1][j] + res[i][j-1])
      }
    }
  }

  // for (let i = 1; i < n; i++) {
  //   for (let j = 1; j < m; j++) {
  //     res[i][j] = res[i-1][j] + res[i][j-1]
  //   }
  // }
  // console.log(res)
  return res[n-1][m-1]
}



  uniquePaths(7, 3)