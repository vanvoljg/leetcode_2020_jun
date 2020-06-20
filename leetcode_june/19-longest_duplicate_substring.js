'use strict';
/**
 * @param {string} S
 * @return {string}
 */
const longestDupSubstring = (S) => {
  // Hint suggests using binary searching to find the correct length of the
  // longest substring.
  // Research suggested taking that length and trying all possible substrings
  // of that length

  if (S.length <= 1) return ""; // No way to have a duplicate with 0 or 1 chars
  let l = 0;
  let r = S.length - 1;

  const PRIME = (1<<31) - 1; // 2,147,438,647 - large prime number
  const R = 26; // Number of letters in the alphabet;

  let powers = [1];
  for (let i = 1; i < S.length; i++) {
    powers[i] = (powers[i - 1] * R) % PRIME;
  }

  let ret = "";
  let mid = 0;
  while (l <= r) {
    mid = ((r - l) >> 1) + l;
    let cur = rabinKarp(S, mid, PRIME, R, powers);

    if (cur.length > ret.length) {
      ret = cur;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ret;
};

const rabinKarp = (str, len, q, R, powers) => {
  if (len === 0) return "";
  
  const A = 'a'.charCodeAt(0);
  let hash = 0;
  let map = new Map();

  for (let i = 0; i < len; i++) {
    hash = (hash * R + (str[i] -A)) % q;
  }

  map.set(hash, [0]);

  for (let i =0; i < len; i++) {
    hash = ((hash - powers[len - 1] * (str[i - len] - A)) % q + q) % q;
    hash = (hash * R + (str[i] - A)) % q;

    if (!map.has(hash)) {
      map.set(hash, i - len + 1);
    } else {
      let arr = map.get(hash)
      for (let i = 0; i < map.size; i ++) {
        let newStr = str.substring(i - len + 1, len);
        if (str.substring(i, len) == newStr) {
          return str.substr(i, len);
        }
      }
      arr.push(i - len + 1);
      map.set(hash, arr);
    }
  }
  return "";
};

const hash = (string, q, r = 26) => {
  let h = 0;
  for (let i = 0; i < string.length; i++) {
    h = (r * h + string.charCodeAt(i)) % q;
  }
  return h;
};

const testRunner = (tests) => {
  for (const [string, answer] of tests) {
    const result = longestDupSubstring(string);
    console.log({
      string,
      answer,
      result,
      pass: result === answer,
    });
  }
};

const test = () => {
  const tests = [
    ['banana', 'ana'],
    ['abcde', ''],
  ];

  testRunner(tests);
};

test();
