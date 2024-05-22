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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0
    let smallestNode = null

    function traverse(node) {
        if (node == null || smallestNode) return

        traverse(node.left)

        if (++count === k) {
            smallestNode = node
            return
        }

        traverse(node.right)
    }

    traverse(root)
    return smallestNode.val
};