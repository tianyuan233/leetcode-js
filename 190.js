var reverseBits = function (n) {
  var res = 0;
  var count = 32;

  while (count--) {
    res = res + (n & 1)
    n = n >>> 1
    res << 1
    console.log(res);
    
  }
  console.log(res);
  
  return res >>> 0;
};

reverseBits(43261596)