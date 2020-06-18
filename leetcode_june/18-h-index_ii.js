'use strict';
/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations) => {
  let l = 0;
  let r = citations.length - 1;
  let i = 0;
  let h = 0;
  while (l <= r) {
    i = ((r - l) >> 1) + l;
    const paperIdx = citations.length - i; // 1-based indexing
    if (citations[i] >= paperIdx) {
      r = i - 1;
    } else if (citations[i] < paperIdx) {
      l = i + 1;
    } 
    h = paperIdx;
  }
  return citations[i] >= citations[i - 1] ? h - 1 : h;
};

const testRunner = (tests) => {
  for (const [citations, hIdx] of tests) {
    const result = hIndex(citations);
    console.log({
      citations,
      hIdx,
      result,
      pass: result === hIdx,
    });
  }
};

const test = () => {
  let citations = [
    [[0, 1, 3, 5, 6], 3],
    [[3, 3, 5, 8, 25], 3],
    [[3, 4, 5, 8, 10], 4],
    [[0, 0, 3, 4, 7, 9, 10, 11, 11, 18, 20, 22], 7],
    [[0, 0, 3, 4, 7, 7, 7, 8, 8, 9, 9, 9, 10, 11, 11, 18, 20, 22], 9],
    [
      [0, 3, 4, 7, 9, 10, 11, 18, 20, 22, 24, 25, 28, 30, 33, 50, 102],
      11,
    ],
    [
      [0, 3, 4, 7, 9, 10, 11, 18, 20, 22, 24, 25, 28, 30, 33, 35, 42, 50, 62, 71, 102],//len 21
      14,
    ],
    [[], 0],
    [[1], 1],
    [[0], 0],
    [[100], 1],
    [[1, 2], 1],
    [[11, 15], 2],
  ];

  testRunner(citations);
};

test();
