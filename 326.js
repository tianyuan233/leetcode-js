// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfThree = function (n) {
//   if (n === 0) return false
//   if (n === 1) return true
//   var start = 1
//   var end = n

//   while (end - start > 1) {
//     var mid = Math.ceil((end + start) / 2)
//     var res = 3 ** mid
//     if (res === n) {
//       return true
//     } else if (res > n) {
//       end = mid
//     } else {
//       start = mid
//     }
//   }
//   return false
// }

// if (isPowerOfThree(45)) {
//   console.log('hahaha');
// } else {
//   console.log('22222');

// }

var isPowerOfThree = function (n) {
  if (n === 0) return false
  if (n === 1) return true
  while (n >= 3) {
    if (n % 3 === 0) {
      n = n / 3
    } else {
      return false
    }
  }
  return n === 1 ? true:false
}

isPowerOfThree(27)