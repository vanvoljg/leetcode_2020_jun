'use strict';
/**
 * @param {string} S
 * @return {string}
 */
const longestDupSubstring = (S) => {

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
