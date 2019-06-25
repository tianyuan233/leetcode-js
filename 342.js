/**
 * @param {number} num
 * @return {boolean}
 */
let isPowerOfFour = function (n) {
  if (n === 0) return false
  if (n === 1) return true
  while (n >= 4) {
    if (n % 4 === 0) {
      n = n / 4
    } else {
      return false
    }
  }
  return n === 1 ? true : false
}



isPowerOfFour(16)