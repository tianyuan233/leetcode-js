// var reverseBits = function (n) {
//   var res = 0
//   for (let i = 0; i < 32; i++) {
//     if (n & 1 === 1) {
//       res = (res << 1) + 1
//     } else {
//       res << 1
//     }
//     n >>> 1
//   }
//   return res
// }

var reverseBits = function (n) {
  var t = n.toString(2).split("");
  while (t.length < 32) t.unshift("0");
  return parseInt(t.reverse().join(""), 2);
};
console.log(reverseBits(11111111111111111111111111111101));


