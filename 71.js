/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  var res = []
  var path_arr = path.split('/')
  console.log(path_arr);
  
  for (let i = 0; i < path_arr.length; i++) {
    const ele = path_arr[i];
    if (ele) {
      if (ele == '..') {
        res.pop()
      } else if(ele !== '.') {
        res.push(ele)
      }
    }
    console.log(res)
  }

  return '/' + res.join('/')

};


simplifyPath("/a/./b/../../c/")