'use strict';

import { Tree } from './lib/tree.js';

/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function (root) {
  return;
};

const testRunner = (tests, func) => {
  const name = func.name;
  for (const [treeArray, expected] of tests) {
    let input = new Tree(treeArray);
    const result = func(input);
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
    [[1, 2, 3, 4, 5, 6], 6],
    [[1, 2, 3, 4], 4],
    [[1, 2, 3, 4, 5, 6, 7], 7],
  ];

  testRunner(tests, countNodes);
};

export default test();
