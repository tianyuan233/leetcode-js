// /**
//  * @param {number} n
//  * @return {number}
//  */


// function isPrimeNum(num) {
//   if (num < 2) {
//     return false
//   }

//   if (num == 2 || num == 3 || num == 5) {
//     return true;
//   }
//   if (num % 2 === 0) {
//     return false
//   }

//   if (num % 3 === 0) {
//     return false
//   }

//   if (num % 5 === 0) {
//     return false
//   }
//   for (var i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   };
//   return true;
// }

// var countPrimes = function (n) {
//   var count = 0
//   for (let i = 2; i < n; i++) {
//     if (isPrimeNum(i)) {
//       count++
//     }
//   }
//   return count
// };

var countPrimes = function (n) {
  var flags = new Array(n)
  flags.fill(1)
  // console.log(flags);

  for (let i = 2; i < n; i++) {
    for (let j = i*i; j < n; j +=i) {
      flags[j] = 0
    }
    
  }

  var res = 0
  for (let i = 2; i < flags.length; i++) {
    res +=flags[i]
  }

  // return flags.reduce((sum,ele)=>{
  //   return sum + ele
  // },0) - 2
  return res
};


countPrimes(5)