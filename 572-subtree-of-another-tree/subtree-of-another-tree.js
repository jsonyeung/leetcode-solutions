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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSameTree(root1, root2) {
  if (!root1 ^ !root2) { // ^ is xor (exclusive or)
    return false;
  } else if (!root1) {
    return true;
  }

  if (root1.val === root2.val) {
    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
  }
  return false;
}

function isSubtree(root, subtree) { // return boolean
  if (!root) {
     // return true if both are empty but false if the root is empty and the subtree is not
     return !subtree;
  }

  const isOnRight = isSubtree(root.right, subtree);
  const isOnLeft = isSubtree(root.left, subtree);
  const isRightHere = isSameTree(root, subtree);

  return isRightHere || isOnLeft || isOnRight;
}