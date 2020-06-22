/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = function (dungeon) {
  const h = dungeon.length;
  const w = dungeon[0].length;
  if (h == 0 || w == 0) return 0;

  let hp = new Array(h).fill(0);
  for (let i = 0; i < h; i++) {
    hp[i] = new Array(w).fill(0);
  }

  hp[h - 1][w - 1] = Math.max(1, 1 - dungeon[h - 1][w - 1]);

  // build right column
  const right = w - 1;
  for (let i = h - 2; i >= 0; i--) {
    hp[i][right] = Math.max(1, hp[i + 1][right] - dungeon[i][right]);
  }

  // build bottom row
  const bottom = h - 1;
  for (let j = w - 2; j >= 0; j--) {
    hp[bottom][j] = Math.max(1, hp[bottom][j + 1] - dungeon[bottom][j]);
  }

  // remaining cells
  for (let i = h - 2; i >= 0; i--) {
    for (let j = w - 2; j >= 0; j--) {
      hp[i][j] = Math.max(1, Math.min(hp[i + 1][j], hp[i][j + 1]) - dungeon[i][j])
    }
  }

  return hp[0][0];
};

const testRunner = (tests, func) => {
  const name = func.name;
  for (const [input, expected] of tests) {
    const result = func(input);
    console.log({
      name,
      input,
      expected,
      result,
      pass: result === expected,
    });
  }
};

const test = () => {
  const tests = [
    [
      [
        [-2, -3, 3],
        [-5, -10, 1],
        [10, 30, -5],
      ],
      7,
    ],
    [
      [
        [  0, -10, -10, -10, -10, -10],
        [  0,   0,   0,   0,   0, -10],
        [-10, -10, -10, -10,   0, -10],
        [  0,   0,   0, -10,   0, -10],
        [  0, -10,   0, -10,   0, -10],
        [  0, -10,   0,   0,   0, -10],
        [  0, -10, -10, -10, -10, -10],
        [  0,   0,   0,   0,   0,   0],
      ],
      11,
    ],
  ];

  testRunner(tests, calculateMinimumHP);
};

test();
