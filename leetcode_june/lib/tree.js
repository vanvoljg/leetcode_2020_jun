'use strict';

import { Deque as Queue } from './deque.js';

export class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export class Tree {
  constructor(array) {
    if (array instanceof Array && array.length > 0) {
      this.root = new TreeNode(array[0]);
      for (let i = 1; i < array.length; i++) {
        this.addNode(array[i]);
      }
    } else {
      this.root = null;
    }
  }

  addNode(val) {
    if (this.root === null) {
      this.root = new TreeNode(val);
      return;
    }
    let q = new Queue(this.root);
    while (q.peek()) {
      const cur = q.shift();
      if (!cur.left) {
        cur.left = new TreeNode(val);
        return;
      }
      if (!cur.right) {
        cur.right = new TreeNode(val);
        return;
      }
      cur.left && q.push(cur.left);
      cur.right && q.push(cur.right);
    }
  }

  toArray() {
    let q = new Queue(this.root);
    let ret = [];
    while (q.peek()) {
      const cur = q.shift();
      ret.push(cur.val);
      cur.left && q.push(cur.left);
      cur.right && q.push(cur.right);
    }
    return ret;
  }
}
