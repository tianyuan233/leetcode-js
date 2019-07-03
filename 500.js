/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  var r1 = "qwertyuiop"
  var r2 = "asdfghjkl"
  var r3 = "zxcvbnm"
  var res = []
  var kb = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]

  for (let i = 0; i < words.length; i++) {
    const element = words[i].toLowerCase();
    // console.log(element);
    var intersectionSet1 = element.split('').filter(v => r1.includes(v)).join('')
    var intersectionSet2 = element.split('').filter(v => r2.includes(v)).join('')
    var intersectionSet3 = element.split('').filter(v => r3.includes(v)).join('')
    var temp = [intersectionSet1,intersectionSet2,intersectionSet3]
    // console.log(temp);
    if(temp.includes(element)) {
      res.push(words[i])
    }
  }
  console.log(res);
  
  return res

};


findWords(["Hello", "Alaska", "Dad", "Peace"])