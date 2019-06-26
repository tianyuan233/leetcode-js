// /**
//  * @param {number} N
//  * @return {number}
//  */
var binaryGap = function (N) {
  // var data = .toString(2).split('')
  var max = 0
  var count = 0
  while (N > 0) {
    if (N & 1) {
      max = Math.max(max,count)
      count = 0
    }
    count++
    N = N >>> 1
  }
  return max
}
// var binaryGap = function (N) {
//   var n = N.toString(2)
//   var count = 0;
//   var max = 0;
//   for (var i = 0; i < n.length; i++) {
//     if (n[i] == '1') {
//       max = Math.max(count, max)
//       count = 0;
//     }
//     count++
//   }
//   return max
// };

console.log(binaryGap(8));
