/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let sum = 0
  let s_len = s.length - 1
  for (let i = s.length - 1; i >= 0; i--) {
    sum = sum + (s[i].charCodeAt() - 64) * (26 ** (s_len - i))
  }
  return sum
};

titleToNumber('AA')