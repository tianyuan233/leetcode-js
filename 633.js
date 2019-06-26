// /**
//  * @param {number} c
//  * @return {boolean}
//  */
// var judgeSquareSum = function (c) {
//   for (let i = 0; i <= c; i++) {
//     for (let j = c; j >= 0; j--) {
//       console.log(i);
//       console.log(j);
//       res = (i + j) * (i + j) - 2 * i * j
//       console.log(res);
      
//       if (res == c) {
//         return true
//       }
//     }
//   }
//   return false
// };


// judgeSquareSum(10000000)
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let i = 0; i <= Math.sqrt(c); i++) {
    var res = c - i*i
    if (Math.sqrt(res) % 1 === 0) {
      return true
    }
  }
  return false
};