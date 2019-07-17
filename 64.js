/**
 * 
 * @param {*} grid 
 */
var minPathSum = function (grid) {
  var h = grid.length
  var w = grid[0].length

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      console.log(i,j)
      if (i == 0 && j !== 0) {
        grid[i][j] = grid[i][j - 1] + grid[i][j]
      } else if (i !== 0 && j === 0) {
        grid[i][j] = grid[i - 1][j] + grid[i][j]
      } else if (i !== 0 && j !== 0) {
        grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j]
      }
    }
  }
  return grid[h - 1][w - 1]

};

minPathSum([[1, 2, 5], [3, 2, 1]])

