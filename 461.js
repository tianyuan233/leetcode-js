/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  return (x ^ y).toString(2).split('').reduce((sum, ele) => {
    return sum + Number(ele)
  }, 0)
};