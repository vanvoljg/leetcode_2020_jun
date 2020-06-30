'use strict';

import { Trie } from './lib/trie.js';

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (board, words) => {
  let trie = new Trie();
  return [''];
};

const testRunner = (tests, func) => {
  const name = func.name;
  for (let { input, expected } of tests) {
    const result = func(input);
    console.log({
      name,
      input,
      result,
      expected,
      pass: result === expected,
    });
  }
};

const test = () => {
  const tests = [
    {
      input: [
        [
          ['o', 'a', 'a', 'n'],
          ['e', 't', 'a', 'e'],
          ['i', 'h', 'k', 'r'],
          ['i', 'f', 'l', 'v'],
        ],
        ['oath', 'pea', 'eat', 'rain'],
      ],
      expected: ['eat', 'oath'],
    },
  ];

  testRunner(tests, findWords);
};

export default test();
