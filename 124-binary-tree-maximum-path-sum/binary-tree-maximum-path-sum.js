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

    function helper(node) {
        if (node == null) return 0

        let leftSum = helper(node.left)
        let rightSum = helper(node.right)

        maxSum = Math.max(
            node.val + leftSum, // left sum path
            node.val + rightSum, // right sum path
            leftSum + node.val + rightSum, // altogether as a path
            node.val, // the node only
            maxSum
        )

        return Math.max(
            node.val,
            node.val + leftSum,
            node.val + rightSum
        )
    }

    helper(root)
    return maxSum
};