/**
 * @param {number} N
 * @return {number}
 */
let fib = function (N) {
  if (N === 1) {
    return 1
  }
  if (N === 0) {
    return 0
  }

  if (N > 1) {
    return (fib(N - 1) + fib(N - 2))
  }
}
console.log(fib(2))
