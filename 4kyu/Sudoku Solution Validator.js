function validSolution(board) {
  return validColumns(board) && validRow(board) && valid9(board);
}

function validRow(board) {
  let total = [];
  let check = true;
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board.length; i++) {
      total.push(board[j][i]);
    }
    check = total.sort().every((elem, index) => elem == index + 1) && check;
    total = [];
  }
  return check;
}

function validColumns(board) {
  let total = [];
  let check = true;
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board.length; i++) {
      total.push(board[i][j]);
    }
    check = total.sort().every((elem, index) => elem == index + 1) && check;
    total = [];
  }
  return check;
}

function valid9(board) {
  let total = [];
  let check = true;
  for (let k = 1; k < 4; k++) {
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        total.push(board[j].pop());
      }
    }
    if (k % 3 == 0) {
      board.splice(0, 3);
    }
    check = total.sort().every((elem, index) => elem == index + 1) && check;
    total = [];
  }
  return check;
}

let array = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

console.log(validSolution(array));
