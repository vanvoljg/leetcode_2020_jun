'use strict';

import { Tree } from './lib/tree.js';

/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function (root) {
  // Brute-force O(n) solution: DFS counting
  let count = dfsCount(root);
  return count;
};

function dfsCount(root, count = 0) {
  if (!root) return count;
  count++;
  count = dfsCount(root.left, count);
  return dfsCount(root.right, count);
}

const testRunner = (tests, func) => {
  const name = func.name;
  for (const [treeArray, expected] of tests) {
    let input = new Tree(treeArray);
    const result = func(input.root);
    console.log({
      name,
      input: input.toArray(),
      expected,
      result,
      pass: result === expected,
    });
  }
};

const test = () => {
  const tests = [
    [[10],1],
    [[10,11,-4],3],
    [[1, 2, 3, 4, 5, 6], 6],
    [[1, 2, 3, 4], 4],
    [[1, 2, 3, 4, 5, 6, 7], 7],
  ];

  testRunner(tests, countNodes);
};

export default test();
