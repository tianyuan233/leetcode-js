/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  function valid(data) {
    var row = data.filter(v => v == '.' ? false : true)
    var row_unique = [...new Set(row)]
    console.log(row,row_unique);
    
    return row.length === row_unique.length

  }
  for (let i = 0; i < 9; i++) {
    var col = []
    for (let j = 0; j < 9; j++) {
      col.push(board[j][i])
    }

    if (valid(col) == false) {
      return false
    }
    if (valid(board[i]) == false) {
      return false
    }
  }
  for (let r = 0; r < 8; r += 3) {
    for (let c = 0; c < 8; c += 3) {
      // console.log('-----',r,c,'--------');

      var block = []
      for (let i = r; i < r + 3; i++) {
        for (let j = c; j < c + 3; j++) {
          block.push(board[i][j])
        }
      }
      if (valid(block) == false) {
        return false
      }
    }
  }
  return true
};

console.log(isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."], 
  ["6", ".", ".", "1", "9", "5", ".", ".", "."], 
  [".", "9", "8", ".", ".", ".", ".", "6", "."], 
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"], 
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"], 
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"], 
  [".", "6", ".", ".", ".", ".", "2", "8", "."], 
  [".", ".", ".", "4", "1", "9", ".", ".", "5"], 
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

));
