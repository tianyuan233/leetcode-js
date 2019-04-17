/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
let fairCandySwap = function (A, B) {
  let sumA = A.reduce((sum, ele) => { return sum + ele })
  let sumB = B.reduce((sum, ele) => { return sum + ele })
  // console.log(sumA)
  // console.log(sumB)
  let dis = (sumA - sumB) / 2
  // console.log(dis)
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] - B[j] === dis) {
        return [A[i], B[j]]
      }
    }
  }
}

console.log(fairCandySwap([1, 1], [2, 2]))

