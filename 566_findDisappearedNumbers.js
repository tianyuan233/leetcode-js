/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
let matrixReshape = function (nums, r, c) {
  let data = nums.reduce((data, line) => {
    return data.concat(line)
  }, [])

  if (data.length !== r * c) {
    return nums
  }
  let res = new Array()
  for (let i = 0; i < r; i++) {
    res[i] = new Array()
    for (let j = 0; j < c; j++) {
      res[i][j] = data[i * c + j]
    }
  }

  console.log(res)

}

matrixReshape([
  [1, 2],
  [3, 4]
], 4, 1)