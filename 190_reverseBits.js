let reverseBits = function (n) {
  let data = []
  while (n > 0) {
    data.push(n % 2)
    n = n >>> 1
    // n = parseInt(n / 2, 10);
    // console.log(n);

  }
  console.log(data.length)

  for (let i = data.length; i < 32; i++) {
    data.push(0)
  }
  // console.log(data);
  return parseInt(data.join(''), 2)

}

reverseBits(00000000000000000000000000000111)
