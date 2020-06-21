/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {
  let arr = permutations(n);
  arr.sort();
  return arr[k - 1].join('');
};

const permutations = (n) => {
  if (n === 1) return [[1]];
  let arr = permutations(n - 1);
  let ret = [];
  let i = 0;
  let j = 0;
  let limit = arr.length * n;
  while (j < limit) {
    // console.log({ i, j, n });
    let cur;
    cur = [...arr[i]];
    // console.log(cur);
    cur.splice(n - (j % n) - 1, 0, n);
    ret[j] = cur;
    j++;
    if (j % n === 0) i++;
  }

  return ret;
};

const testRunner = (tests, func) => {
  const name = func.name;
  for (const [input, expected] of tests) {
    const result = func(...input);
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
    // [[1, 1], '1'],
    [[2, 1], '12'],
    [[2, 2], '21'],
    [[3, 3], '213'],
    [[4, 9], '2314'],
    // [[4,17],'3412'],
  ];

  testRunner(tests, getPermutation);
};

test();
