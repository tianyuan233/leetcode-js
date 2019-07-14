/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   var res = 0
//   var count = 0
//   for (let i = 0; i < s.length; i++) {
//     var map = {}
//     count = 0
//     for (let j = i; j < s.length; j++) {
//       if (s[j] in map) {
//         count = 0
//       } else {
//         map[s[j]] = 1
//         count += 1
//       }
//       res = Math.max(res, count)
//     }
//   } 
//   return res
// };


var lengthOfLongestSubstring = function (s) {
  var res = 0
  var count = 0
  var map = {}
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if (ele in map) {
      // count = 1
    } else {
      map[ele] = 1
      count+=1
      res = Math.max(res,count)
    }
    console.log(map);
        
  }
  console.log(map.size);
  
  return res
};


lengthOfLongestSubstring('dvdf')