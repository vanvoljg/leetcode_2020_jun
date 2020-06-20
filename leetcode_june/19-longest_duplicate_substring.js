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

};

const hash = (string, q, r = 26) => {
  let h = 0;
  for (let i = 0; i < string.length; i++) {
    h = (r * h + string.charCodeAt(i)) % q;
  }
  return h;
}

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
