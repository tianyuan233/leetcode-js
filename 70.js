/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//   console.log(n)
//   if (n == 1) {
//     return 1
//   } else if (n == 2) {
//     return 2
//   } else {
//     return arguments.callee(n - 1) + arguments.callee(n - 2)
//   }

// };

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let arr = [1, 2]
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
    console.log(arr);

  }
  return arr[n - 1]
};



console.log(climbStairs(44));
