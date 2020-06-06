/**
 * @param {number[]} w
 */
var Solution = function (w) {
  const sum = w.reduce((a, b) => a + b); // O(n)
  this.weights = w
    .reduce((acc, weightInt, i) => { // O(n)
      acc[i] = { weight: weightInt / sum, index: i };
      return acc;
    }, [])
    .reduce((acc, { weight, index }, idx) => { // O(n)
      acc[idx] = {
        weight: weight + (idx == 0 ? 0 : acc[idx - 1].weight),
        index: index,
      };
      return acc;
    }, [])
    .sort((a, b) => a.weight - b.weight); // O(n lg n)
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const rand = Math.random();
  this.weights.reduce(
    (acc, { weight, index }) => {
      console.log({ acc });
      if (acc.done) {
        return acc;
      }
      acc.done = rand < weight;
      if (acc.done) {
        acc.index = index;
      }
      return acc;
    },
    { done: false }
  );
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

function bibble() {
  const w = [1, 2, 5, 4, 3];
  let sum = 0;
  let weights = w.map((ele) => (sum += ele)).map((ele) => ele / sum);
  // .reduce((acc, weightInt, i) => {
  // acc[i] = { weight: weightInt / sum, index: i };
  // return acc;
  // }, [])
  // .reduce((acc, { weight, index }, idx) => {
  // acc[idx] = {
  // weight: weight + (idx == 0 ? 0 : acc[idx - 1].weight),
  // index: index,
  // };
  // return acc;
  // }, [])
  // .sort((a, b) => a.weight - b.weight);

  const rand = Math.random();
  // weights.reduce(
  // (acc, { weight, index }) => {
  // console.log({ acc });
  // if (acc.done) {
  // return acc;
  // }
  // acc.done = rand < weight;
  // if (acc.done) {
  // acc.index = index;
  // }
  // return acc;
  // },
  // { done: false }
  // );
  
  // BETTER VERSION: BINARY SEARCH IS O(lg n) instead of O(n lg n), so use this!
  // Especially with large sets...
  // Remember random is [0,1), and all intervals using random numbers must follow
  // this pattern.
  // Given weights of [0.1, 0.4, 0.5, 0.7, 1.0], random cannot ever equal 1.0
  // This means the random number must always be less than the shown weight, and
  // actually being equal to the shown weight means the number falls into the
  // next interval. [0,0.1)[0.1,0.4)[0.4,0.5)[0.5,0.7)[0.7,1.0)

  let left = 0;
  let right = weights.length - 1;

  while (left < right) {
    const mid = (left + right) >> 1;
    if (rand < weights[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  console.log({ weights, rand });
  console.log(left);
}

bibble();
