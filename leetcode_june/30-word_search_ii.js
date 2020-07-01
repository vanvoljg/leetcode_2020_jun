'use strict';

const Trie = function() {
  this.children = {};
  this.word = null;
}

Trie.prototype.insert = function(word) {
  let node = this;
  let char = '';
  for (char of word) {
    if (!node.children[char]) node.children[char] = new Trie();
    node = node.children[char];
  }
  node.word = word;
}

Trie.prototype.build = function(words) {
  for (let word of words) this.insert(word);
}

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
  trie.build(words);
  let ret = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(board, i, j, trie, ret);
    }
  }
  return ret.reverse();
};

const dfs = (board, i, j, trie, ret) => {
  const char = board[i][j];
  if (char === '' || !trie.children[char]) return;
  trie = trie.children[char];
  if (trie.word) {
    ret.push(trie.word); // add found word to return array
    trie.word = null; // prevent this word from being selected again
  }
  board[i][j] = '';
  if (i > 0) dfs(board, i - 1, j, trie, ret); // 1 row up
  if (j > 0) dfs(board, i, j - 1, trie, ret); // 1 col left
  if (i < board.length - 1) dfs(board, i + 1, j, trie, ret);
  if (j < board[0].length - 1) dfs(board, i, j + 1, trie, ret);
  board[i][j] = char; // backtrack
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
      pass: arrtest(result, expected),
    });
  }
};

const arrtest = (result, expected) => {
  for (let i = 0; i < expected.length; i++) {
    if (result[i] !== expected[i]) return false;
  }
  return true;
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
