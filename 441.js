/**
 * @param {number} n
 * @return {number}
 */
let arrangeCoins = function (n) {
  let row = 0
  while (n >= 0) {
    row += 1
    // eslint-disable-next-line no-param-reassign
    n = n - row
  }
  return row - 1
}

// binary search
let arrangeCoins2 = function (n) {
  let start = 0
  let end = n
  if (n === 1) return 1
  while (end - start > 1) {
    let mid = Math.ceil((end + start) / 2)
    let sum = mid * (mid + 1) / 2
    if (sum > n) {
      end = mid
    } else {
      start = mid
    }
  }
  return start
}


console.log(arrangeCoins(1))
console.log(arrangeCoins2(8))
