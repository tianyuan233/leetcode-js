/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

  if (s.length !== t.length) {
    return false
  }
  var map = {}
  // var res = 0
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if (ele in map) {
      map[ele] += 1
    } else {
      map[ele] = 1
    }
  }
  console.log(map);
  for (let j = 0; j < t.length; j++) {
    let ele = t[j]
    if (ele in map) {
      map[ele] -= 1
      if (map[ele] < 0) {
        return false
      }
    } else {
      return false
    }
  }
  return true
};

isAnagram("anagram", "nagaram")