/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  var s_res = []
  var t_res = []

  for (let i = 0; i < S.length; i++) {
    const ele = S[i];
    if (ele == '#') {
      s_res.pop()
    } else {
      s_res.push(ele)
    }
  }

  for (let i = 0; i < T.length; i++) {
    const ele = T[i];
    if (ele == '#') {
      t_res.pop()
    } else {
      t_res.push(ele)
    }
  }
  return s_res.join('') == t_res.join('') 
};

backspaceCompare("ab#c","ad#c")