/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  var res = n.toString(2)
  for (let i = 0; i < res.length - 1; i++) {
    if ((res[i] ^ res[i+1]) === 0) {
      return false
    }
  }
  return true

};

console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(6));
