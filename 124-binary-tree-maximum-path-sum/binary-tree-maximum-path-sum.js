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
var maxPathSum = function(root) {
    let maximum = -Infinity

    function traverse(node) {
        if (node == null) return 0

        // if it's negative we know that it would be a bad choice for this subtree
        let leftVal = Math.max(traverse(node.left), 0)
        let rightVal = Math.max(traverse(node.right), 0)

        maximum = Math.max(maximum, leftVal + node.val + rightVal)

        return node.val + Math.max(leftVal, rightVal)
    }

    traverse(root)
    return (maximum === Infinity) ? 0 : maximum
};