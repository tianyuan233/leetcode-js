/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
      // console.log(digits);
    } else {
      digits[i]++
      return digits
    }
  }
  if (digits[0] === 0) {
    digits.unshift(1)
  }
  return digits
}