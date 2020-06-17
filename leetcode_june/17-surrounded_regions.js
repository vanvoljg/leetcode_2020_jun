/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {};

const testRunner = (testArr) => {
  for (const [inBoard, outBoard] of testArr) {
    console.log({
      inBoard,
      outBoard,
      pass: solve(inBoard) === outBoard,
    });
  }
};

const run = () => {
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
  ];
  console.log(boards);

  testRunner(boards);
};

run();
