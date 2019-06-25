// function myPow(x, n) {
//   if (n === 0) return 1
//   if (n === 1) return x
//   if (n > 0) {
//     while (n > 1) {
//       if (n % 2 === 0) {
//         let half = myPow(x, n / 2)
//         return half * half
//       } else {
//         return x * myPow(x, (n - 1) / 2)
//       }
//     }
//   } else {
//     return myPow(1 / x, -n)
//   }
// }
let myPow = function (x, n) {
  let result = 1
  let t = x
  let m = 1
  while (n > 0) {
    if (m * 2 <= n) {
      t = t * t
      m = m * 2
    } else {
      result *= t
      n = n - m
      t = x
      m = 1
    }
  }
  return result
}

console.log(myPow(2, 4))
