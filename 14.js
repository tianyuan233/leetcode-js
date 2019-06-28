/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return ''
  }
  var res = ''
  console.log(strs);
  console.log(strs[0]);
  
  console.log(strs[0].length);
  
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return res
      } 
    }
    res = res + strs[0][i]
  }
  return res
};

longestCommonPrefix([''])

