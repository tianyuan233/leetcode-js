/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  if (s == t) {
    return true
  }

  var map1 = {}
  var map2 = {}
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map1) {
      if (map1[s[i]] !== t[i]) {
        return false
      }
    } else {
      map1[s[i]] = t[i]
    }

    if (t[i] in map2) {
      if (map2[t[i]] !== s[i]) {
        return false
      }
    } else {
      map2[t[i]] = s[i]
    }
  }
  console.log(map1);
  console.log(map2);
  return true
};
console.log(isIsomorphic('ab', 'aa'));

