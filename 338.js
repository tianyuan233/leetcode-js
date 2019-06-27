/**
 * @param {number} num
 * @return {number[]}
 */
function count(str) {
  var count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 1) {
      count++
    }
  }
  return count
}

 var countBits = function (num) {
  var res = []
  for (let i = 0; i <= num; i++) {
    res.push(count(i.toString(2)))
  }
  return res
};


countBits(6)