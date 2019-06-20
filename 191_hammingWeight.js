/**
 * @param {number} n - a positive integer
 * @return {number}
 */
let hammingWeight = function (n) {
  let count = 0
  while (n) {
    // if (n & 1 === 1) {
    //     count +=1
    // }
    count += n & 1
    n = n >>> 1
    // console.log(n)
  }
  return count
}

console.log(hammingWeight(0b1011));
