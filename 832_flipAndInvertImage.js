const flipAndInvertImage = function (A) {
  let temp = []
  for (let i = 0; i < A.length; i++) {
    const element = A[i];
    temp.push(element.reverse().map((x) => 1 ^ x));
  }
  return temp;
}

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
  ])
);