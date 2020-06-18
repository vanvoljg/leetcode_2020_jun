/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations) => {
  // Because it's easier to search from the largest number, go in reverse order
  for (let i = citations.length - 1; i >= 0; i--) {
    const paperNum = citations.length - i;
    if (citations[i] < paperNum) {
      return paperNum - 1;
    }
  }
};

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
