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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  postOrderInvert(root);
  return root;
};

/**
 * @param {TreeNode} root
 */
var postOrderInvert = function (root) {
  if (root == null) {
    return;
  }

  postOrderInvert(root.left);
  postOrderInvert(root.right);

  let tmp = root.right;
  root.right = root.left;
  root.left = tmp;

  return;
};
