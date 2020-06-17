/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
  if (board.length < 3) return;
  for (let i = 1; i < board.length - 1; i++) {
    for (let j = 1; j < board[i].length - 1; j++) {
      if (board[i][j] == 'X') continue;
      if (capturable(board, i, j, board.length, board[i].length)) {
        board[i][j] = 'X';
      }
    }
  }
};

const capturable = (board, row, col, height, width) => {
  let rowL = false;
  let rowR = false;
  let colT = false;
  let colB = false;
  // Check row validity left side
  let i = col - 1;
  while (i >= 0) {
    if (board[row][i] == 'X') {
      rowL = true;
      break;
    }
    i--;
  }
  // Check row validity right side
  i = col + 1;
  while (i <= width - 1) {
    if (board[row][i] == 'X') {
      rowR = true;
      break;
    }
    i++;
  }
  // Check col validity above / top
  i = row - 1;
  while (i >= 0) {
    if (board[i][col] == 'X') {
      colT = true;
      break;
    }
    i--;
  }
  // Check col validity below / bottom
  i = row + 1;
  while (i <= height - 1) {
    if (board[i][col] == 'X') {
      colB = true;
      break;
    }
    i++;
  }
  return rowL && rowR && colT && colB;
};

const testRunner = (testArr) => {
  for (const [inBoard, outBoard] of testArr) {
    let copy = [];
    for (const row of inBoard) {
      copy.push([...row]);
    }
    let pass = true;
    solve(inBoard);
    for (let i = 0; i < inBoard.length; i++) {
      for (let j = 0; j < inBoard[i].length; j++) {
        if (inBoard[i][j] !== outBoard[i][j]) {
          console.log("FAILING BOARD:", inBoard);
          pass = false;
        }
      }
    }
    console.log({
      inBoard: copy,
      outBoard,
      pass,
    });
  }
};

const test = () => {
  let boards = [
    // [
    // [
    // ['X', 'X', 'X', 'X'],
    // ['X', 'O', 'O', 'X'],
    // ['X', 'X', 'O', 'X'],
    // ['X', 'O', 'X', 'X'],
    // ],
    // [
    // ['X', 'X', 'X', 'X'],
    // ['X', 'X', 'X', 'X'],
    // ['X', 'X', 'X', 'X'],
    // ['X', 'O', 'X', 'X'],
    // ],
    // ],
    // [
    // [
    // ['X', 'X', 'X', 'X', 'X'],
    // ['X', 'O', 'O', 'X', 'X'],
    // ['X', 'X', 'O', 'X', 'X'],
    // ['X', 'O', 'X', 'X', 'X'],
    // ['X', 'X', 'O', 'X', 'O'],
    // ],
    // [
    // ['X', 'X', 'X', 'X', 'X'],
    // ['X', 'X', 'X', 'X', 'X'],
    // ['X', 'X', 'X', 'X', 'X'],
    // ['X', 'X', 'X', 'X', 'X'],
    // ['X', 'X', 'O', 'X', 'O'],
    // ],
    // ],
    // [
    // [
    // ['O', 'O', 'O'],
    // ['O', 'O', 'O'],
    // ['O', 'O', 'O'],
    // ],
    // [
    // ['O', 'O', 'O'],
    // ['O', 'O', 'O'],
    // ['O', 'O', 'O'],
    // ],
    // ],
    [
      [
        ['O', 'X', 'X', 'O', 'X'],
        ['X', 'O', 'O', 'X', 'O'],
        ['X', 'O', 'X', 'O', 'X'],
        ['O', 'X', 'O', 'O', 'O'],
        ['X', 'X', 'O', 'X', 'O'],
      ],
      [
        ['O', 'X', 'X', 'O', 'X'],
        ['X', 'X', 'X', 'X', 'O'],
        ['X', 'X', 'X', 'O', 'X'],
        ['O', 'X', 'O', 'O', 'O'],
        ['X', 'X', 'O', 'X', 'O'],
      ],
    ],
  ];

  // for (const [inBoard, outBoard] of boards) {
  // console.log({ inBoard, outBoard });
  // }

  testRunner(boards);
};

test();
