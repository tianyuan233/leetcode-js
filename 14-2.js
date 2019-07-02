/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var res = ''
  if (strs.length === 0) {
    return ''
  }
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return res
      }
    }
    res += strs[0][i]
  }
  return res
};