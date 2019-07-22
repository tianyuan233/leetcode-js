/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  var count = 0
  time.map(ele=>ele % 60 )
  for (let i = 0; i < time.length - 1; i++) {
    const s1 = time[i];
    for (let j = i + 1; j < time.length; j++) {
      const s2 = time[j];
      if ((s1 + s2) / 60 === 0) {
        count+=1
      }
    }
  }
  return count

};