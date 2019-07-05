/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  var map = {}
  var res = 0
  for (let i = 0; i < S.length; i++) {
    const ele = S[i];
    if (ele in map) {
      map[ele] +=1
    }else {
      map[ele] =1
    }
  }

  for (let j = 0; j < J.length; j++) {
    const ele = J[j];
    if (ele in map) {
      res +=map[ele]
    }
  }
  return res
  // console.log(map);
};
console.log(numJewelsInStones('aA', 'aAAbbbb'));

