/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
      return [1, ...digits]
    } else {
      digits[i]++
      return digits
    }
  }

}

plusOne([4, 3, 2, 1])