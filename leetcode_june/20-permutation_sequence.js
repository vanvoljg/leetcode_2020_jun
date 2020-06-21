/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {
  let arr = permutations(n);
  return arr[k - 1];
};

const permutations = (n) => {
  if (n === 1) return ['1'];
  let arr = permutations(n - 1);
  let ret = [];
  let i = 0;
  let j = 0;
  let limit = arr.length * n;
  const nStr = String(n);
  while (j < limit) {
    console.log({ i, j , n});
    let cur;
    if (i < n - 1) {
      cur = arr[i].split('');
      cur.splice(n - (j % (n-1)) - 1, 0, nStr);
      ret[j] = cur.join('');
    } else {
      console.log('blib');
      for (let el of arr) {
        cur = el.split('');
        cur.splice(0, 0, nStr);
        ret[j] = cur.join('');
        j++;
      }
    }
    j++;
    if (j % (n - 1) === 0) i++;
  }
  console.log({ arr, ret });

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
    // [[2, 1], '12'],
    // [[2, 2], '21'],
    // [[3, 3], '213'],
    [[4,9],'2314'],
    // [[4,17],'3412'],
  ];

  testRunner(tests, getPermutation);
};

test();
