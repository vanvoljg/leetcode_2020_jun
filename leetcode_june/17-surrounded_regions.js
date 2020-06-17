/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
  if (board.length < 3) return;

  // check edges & mark edge-linked 'O' as uncapturable, 2 or similar
  // everything which has not been marked uncapturable becomes captured, 'X'
  checkEdges(board);
  markCaptured(board);
};

const checkEdges = (board) => {
  let row = 0;
  let col;

  // Top edge
  for (col = 0; col < board[row].length; col++) {
    if (board[row][col] == 'O') {
      nonCaptureRegion(board, row, col);
    }
  }

  // Right edge
  col = board[0].length - 1;
  for (row = 1; row < board.length; row++) {
    if (board[row][col] == 'O') {
      nonCaptureRegion(board, row, col);
    }
  }

  // Bottom edge
  row = board.length - 1;
  for (col = 0; col < board[row].length - 1; col++) {
    if (board[row][col] == 'O') {
      nonCaptureRegion(board, row, col);
    }
  }

  // Left edge
  col = 0;
  for (row = 1; row < board.length - 1; row++) {
    if (board[row][col] == 'O') {
      nonCaptureRegion(board, row, col);
    }
  }
};

const nonCaptureRegion = (board, row, col) => {
  let stack = [];
  stack.push([row, col]);
  while (stack.length > 0) {
    let cur = stack.pop();
    const cRow = cur[0];
    const cCol = cur[1];
    board[cRow][cCol] = 'N';

    if (cCol > 0 && board[cRow][cCol - 1] == 'O') {
      stack.push([cRow, cCol - 1]);
    }
    if (cCol < board[cRow].length - 1 && board[cRow][cCol + 1] == 'O') {
      stack.push([cRow, cCol + 1]);
    }
    if (cRow > 0 && board[cRow - 1][cCol] == 'O') {
      stack.push([cRow - 1, cCol]);
    }
    if (cRow < board.length - 1 && board[cRow + 1][cCol] == 'O') {
      stack.push([cRow + 1, cCol]);
    }
  }
};

const markCaptured = (board) => {
  const h = board.length;
  for (let i = 0; i < h; i++) {
    const w = board[0].length;
    for (let j = 0; j < w; j++) {
      if (board[i][j] != 'N') board[i][j] = 'X';
      if (board[i][j] == 'N') board[i][j] = 'O';
    }
  }
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
          console.log('FAILING BOARD:', inBoard);
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
    [
      [
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X'],
      ],
      [
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
      ],
    ],
    [
      [
        ['X', 'X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X', 'X'],
        ['X', 'X', 'O', 'X', 'X'],
        ['X', 'O', 'X', 'X', 'X'],
        ['X', 'X', 'O', 'X', 'O'],
      ],
      [
        ['X', 'X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X', 'X'],
        ['X', 'X', 'O', 'X', 'O'],
      ],
    ],
    [
      [
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
      ],
      [
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
      ],
    ],
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
