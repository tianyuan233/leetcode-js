/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  // return num.toString(7)
  if (num === 0) return "0"
  var isN = true
  if (num < 0) {
    isN = false
  }
  num = Math.abs(num)
  var res = []
  while (num !== 0) {
    res.splice(0, 0, num % 7)
    num = Math.floor(num / 7)
  }
  str = res.join("")
  return isN ? str : '-' + str
};