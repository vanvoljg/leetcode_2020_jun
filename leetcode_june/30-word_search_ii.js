'use strict';

import { Trie } from './lib/trie.js';

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (board, words) => {
  let m = board.length;
  let n = board[0].length;
  if (!m || !n) return [];

  let trie = new Trie();
  for (let word of words) trie.insert(word);

  let ret = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(board, i, j, trie, ret);
    }
  }
  return ret;
};

const dfs = (board, i, j, trie, ret) => {
  console.log(trie.startsWith(board[i][j]));
};

const testRunner = (tests, func) => {
  const name = func.name;
  for (let { input, expected } of tests) {
    const result = func(...input);
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
