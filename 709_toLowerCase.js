// solution1
/**
 * @param {string} str
 * @return {string}
 */
let toLowerCase = function (str) {
  return str.toLowerCase()
}
toLowerCase('Hello')

let toLowerCase2 = (str) => {
  const DIFF = 'a'.charCodeAt(0) - 'A'.charCodeAt(0)

  return str.split('')
    .map(x => ((x >= 'A' && x <= 'Z') ? String.fromCharCode(x.charCodeAt(0) + DIFF) : x))
    .join('')

}

toLowerCase2('Hello')
