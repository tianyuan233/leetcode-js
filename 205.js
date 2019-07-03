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

  var map = {}
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      if (map[s[i]] !== t[i]) {
        return false
      }
    } else {
      for (var key in map) {
        if (map[key] == t[i]) {
          return false
        }
      }
      map[s[i]] = t[i]
    }
  }
  return true
};
console.log(isIsomorphic('ab', 'aa'));

