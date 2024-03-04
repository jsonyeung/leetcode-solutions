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
var sumOfLeftLeaves = function(root) {
    if (root == null) return 0

    function traverse(node, isLeft = false) {
        if (node == null) {
            return 0
        }

        // if current node is a leaf node
        if (!node.left && !node.right) {
            return isLeft ? node.val : 0
        }

        return traverse(node.left, true) + traverse(node.right, false)
    }

    return traverse(root)
};