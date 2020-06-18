/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations) => {};

const testRunner = (tests) => {
  for (const [citations, hIdx] of tests) {
    console.log({
      citations,
      hIdx,
      pass: hIndex(citations) === hIdx,
    });
  }
};

const test = () => {
  let citations = [
    [[0, 1, 3, 5, 6], 3],
    [[3, 3, 5, 8, 25], 3],
    [[3, 4, 5, 8, 10], 4],
  ];

  testRunner(citations);
};

test();
