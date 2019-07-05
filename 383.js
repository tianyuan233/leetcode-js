/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  var map = {}
  for (let i = 0; i < magazine.length; i++) {
    let ele = magazine[i]
    if (ele in map) {
      map[ele] +=1
    }else {
      map[ele] = 1
    }
  }

  for (let j = 0; j < ransomNote.length; j++) {
    let ele = ransomNote[j]
      if (ele in map) {
        map[ele] -=1
        if (map[ele] < 0) {
          return false
        }
      } else {
        return false
      }
  }

  return true

  // console.log(map);
  
};

canConstruct("aa","ab")