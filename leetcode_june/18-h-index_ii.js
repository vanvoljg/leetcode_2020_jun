/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations) => {
  // Because it's easier to search from the largest number, go in reverse order
  let l = 0;
  let r = citations.length - 1;
  let mid = 0;
  let paperNum = 0;
  while (l <= r) {
    mid = ((r - l) >> 1) + l;
    paperNum = citations.length - mid;
    if (citations[mid] < paperNum) {
      l = mid + 1;
    } else if (citations[mid] > paperNum) {
      r = mid - 1;
    } else if (citations[mid] === paperNum) {
      return paperNum;
    }
  }
  return paperNum - 1;
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
    [[0,0,3,4,7,9,10,11,11,18,20,22],7],
    [[0,0,3,4,7,7,7,8,8,9,9,9,10,11,11,18,20,22],9],
    [[0,0,3,4,7,7,7,8,8,8,8,8,8,8,8,9,9,9,10,11,11,18,20,22],9],
  ];

  testRunner(citations);
};

test();
