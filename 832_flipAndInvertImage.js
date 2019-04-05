// solution 1
const flipAndInvertImage = function (A) {
  let temp = []
  for (let i = 0; i < A.length; i++) {
    const element = A[i]
    temp.push(element.reverse().map((x) => 1 ^ x))
  }
  return temp
}

console.log(flipAndInvertImage([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0]
]))

// solution 2
let flipAndInvertImage2 = function (A) {
  return A.map((arr) => arr.reverse()).map((arr) => arr.map((x) => 1 ^ x))
}
console.log(flipAndInvertImage2([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0]
]))