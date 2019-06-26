/**
 * @param {number} n - a positive integer
 * @return {number}
 */
let hammingWeight = function (n) {
  let count = 0
  while (n) {
    count += n & 1
    n = n >>> 1
  }
  return count
}

console.log(hammingWeight(0b1011));
