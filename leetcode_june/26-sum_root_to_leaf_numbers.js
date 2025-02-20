'use strict';

import { Tree } from './lib/tree.js';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumNumbers(root) {
  if (!root) return 0;
  return dfs(root, 0);
}

function dfs(root, cur) {
  if (!root) return 0;
  cur = cur * 10 + root.val;
  if (root.left == null && root.right == null) return cur;
  let left = dfs(root.left, cur);
  let right = dfs(root.right, cur);
  return left + right;
}

function testRunner(tests, func) {
  const name = func.name;
  for (const [treeArray, expected] of tests) {
    let input = new Tree(treeArray);
    const result = func(input.root);
    console.log({
      name,
      input: input.toArray(),
      result,
      expected,
      pass: result === expected,
    });
  }
}

const test = () => {
  const tests = [
    [[], 0],
    [[1], 1],
    [[1, 2], 12],
    [[1, 2, 3], 25],
    [[4, 9, 0, 5, 1], 1026],
  ];

  testRunner(tests, sumNumbers);
};

export default test();
