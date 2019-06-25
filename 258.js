/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num >= 10) {
    num = num.toString()
      .split('')
      .reduce(
        (sum, ele) => {
          return sum + (+ele)
        }, 0)
    // console.log(num);

  }
  return num
};

addDigits(38)