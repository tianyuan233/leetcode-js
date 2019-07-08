/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  var map = { 'R': 0, 'L': 0, 'U': 0, 'D': 0 }
  for (let i = 0; i < moves.length; i++) {
    const ele = moves[i];
    map[ele] +=1
  }

  if (mapr['R'] === map['L'] && map['D'] === map['U']) {
    return true
  } else {
    return false
  }

};