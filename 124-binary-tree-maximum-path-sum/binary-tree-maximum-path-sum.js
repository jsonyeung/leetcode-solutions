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
    let maxSum = -Infinity

    function traverse(node) {
        if (node == null) return 0

        let leftVal = Math.max(traverse(node.left), 0)
        let rightVal = Math.max(traverse(node.right), 0)

        let curSum = leftVal + node.val + rightVal

        maxSum = Math.max(curSum, maxSum)

        return node.val + Math.max(leftVal, rightVal)
    }

    traverse(root)
    return maxSum
};