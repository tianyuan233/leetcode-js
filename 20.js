/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = []
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    }
    if (s[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop()
      } else {
        stack.push(s[i])
      }
    }
    if (s[i] === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop()
      } else {
        stack.push(s[i])
      }
    }
    if (s[i] === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop()
      } else {
        stack.push(s[i])
      }
    }
  }

  return stack.length === 0 ? true : false

};


isValid('()[]{(}')