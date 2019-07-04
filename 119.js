/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1]
  }
  var res = [1,1]
  for (let i = 1; i < rowIndex; i++) {
    temp = Array.from(res)
    for (let j = 1; j < res.length; j++) {
      res[j] = temp[j] + temp[j-1]
    }
    res.push(1)
  }
  return res
};

getRow(3)