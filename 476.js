/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  return ('0b'+ num.toString(2).split('').map(ele => ele ^ 1).join('')) / 1
};

findComplement(5)


