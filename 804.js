/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  var temp = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  var trans = []

  for (let i = 0; i < words.length; i++) {
    trans[i] = ''
    for (let j = 0; j < words[i].length; j++) {
      var index = words[i].charCodeAt(j) - 97
      trans[i] = trans[i] + temp[index]
    }
  }

  return Array.from([...new Set(trans)]).length

};

words = ["gin", "zen", "gig", "msg"]
uniqueMorseRepresentations(words)