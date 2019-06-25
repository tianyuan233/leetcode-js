/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {

  // for (let i = 0; i <= num /2; i++) {
  //   if ( i * i === num) {
  //     return true
  //   }
  // }
  // return false
  var start = 0
  var end = num

  while (start <= num) {
    let mid = Math.ceil((start + end) / 2)
    let sqr = mid * mid

    if (sqr === num) {
      return true
    } else if (sqr > num) {
      end = mid
    } else {
      start = mid
    }

    if (end - start <= 1) {
      return false
    }
  }
  return false
};

isPerfectSquare(14)