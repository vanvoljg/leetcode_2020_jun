/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {
  let numbers = [];
  let factorial = [1]; // 0! = 1
  let ret = [];

  // Precompute factorial and usable digits
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i;
    numbers.push(i);
  }

  // k is given as 1-based index, but we use 0-based
  k--;

  for (let i = 1; i <= n; i++) {
    let idx = Math.floor(k / factorial[n - i]);
    ret.push(numbers[idx]);
    numbers.splice(idx, 1);
    k -= idx * factorial[n - i];
  }

  return ret.join('');
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
