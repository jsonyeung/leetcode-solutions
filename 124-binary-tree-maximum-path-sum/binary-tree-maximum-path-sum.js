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

    function helper(node, sum = 0) {
        if (node == null) return 0

        let leftSum = Math.max(helper(node.left, sum), 0)
        let rightSum = Math.max(helper(node.right, sum), 0)

        maxSum = Math.max(
            leftSum + node.val + rightSum,
            maxSum
        )

        return node.val + Math.max(
            leftSum,
            rightSum
        )
    }

    helper(root)
    return maxSum
};