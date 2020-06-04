let twoCitySchedCost = function (costs) {
  costs.sort(([a, b], [c, d]) => (Math.abs(a - b) < Math.abs(c - d) ? 1 : -1));
  let result = { sum: 0, countA: 0, countB: 0 };
  let half = costs.length / 2;
  for (const [a, b] of costs) {
    if (result.countA < half && result.countB < half) {
      if (a == b) {
        result.sum += a;
        result.countA <= result.countB ? result.countA++ : result.countB++;
      } else if (a < b) {
        result.sum += a;
        result.countA++;
      } else { // a > b
        result.sum += b;
        result.countB++;
      }
    } else {
      if (result.countA == half) {
        result.sum += b;
        result.countB++;
      } else { // result.countB == half
        result.sum += a;
        result.countA++;
      }
    }
  }

  return result.sum;
};

let arr = [
  [259, 770],
  [448, 54],
  [926, 667],
  [184, 139],
  [840, 118],
  [577, 469],
];

console.log(twoCitySchedCost(arr));
