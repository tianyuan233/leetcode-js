/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  var res = ''
  while (n) {
    var y = (n-1) % 26
    res = String.fromCharCode(y+65) + res
    n = Math.floor((n-1)/26)
  }
  console.log(res);
};

convertToTitle(701)