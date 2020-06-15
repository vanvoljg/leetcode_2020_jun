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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
  let stack = [root];
  while (stack.length > 0) {
    const cur = stack.pop();
    if (!cur) break;
    if (cur.val == val) return cur;
    if (val < cur.val) stack.push(cur.left);
    if (val > cur.val) stack.push(cur.right);
  }

  return null;
};

function TreeNode(val, left, right) {
  this.val = val || null;
  this.left = left || null;
  this.right = right || null;
}

function QueueNode(val, next) {
  this.val = val || null;
  this.next = next || null;
}

function Queue(val) {
  this.tail = val ? new QueueNode(val) : null;
  this.head = this.tail;
  this.length = this.head ? 1 : 0;
}

Queue.prototype.peek = function () {
  return this.head ? this.head.val : null;
}

Queue.prototype.enqueue = function (val) {
  const newNode = new QueueNode(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
  }
  this.length++;
  return this.length;
}

Queue.prototype.dequeue = function () {
  if (!this.head) return null;
  const val = this.head.val;
  this.head = this.head.next;
  this.length--;
  return val;
}

const addTreeNode = (root, val) => {
  if (!root) {
    root = new TreeNode(val);
    return;
  }
  let q = new Queue(root);
  while (q.peek()) {
    const cur = q.dequeue();
    if (!cur.left) {
      cur.left = new TreeNode(val);
      return;
    }
    if (!cur.right) {
      cur.right = new TreeNode(val);
      return;
    }
    cur.left && q.enqueue(cur.left);
    cur.right && q.enqueue(cur.right);
  }
}

const treeBuilder = (array) => {
  let tree = new TreeNode(array[0]);
  for (let i = 1; i < array.length; i++) {
    addTreeNode(tree, array[i]);
  }
  return tree;
};

const testRunner = (tc) => {
  const tree = treeBuilder(tc[0]);
  const val = tc[1];
  return searchBST(tree, val);
};

const run = () => {
  let tests = [[[4,2,7,1,3],2], [[2,1,3],5]];

  for (const test of tests) {
    console.log('109',{test, result: testRunner(test)},)
  }
};

run();
