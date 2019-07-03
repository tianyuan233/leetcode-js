/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var map = {}
  var res = []
  for (let i = 0; i < strs.length; i++) {
    var key = strs[i].split('').sort().join('')
    if (key in map) {
      map[key].push(strs[i])
    }else {
      map[key] = []
      map[key].push(strs[i])
    }
  }
  // console.log(map);
  for (var key in map) {
    res.push(map[key])
  }
  // console.log(res);
  return res
};




groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])