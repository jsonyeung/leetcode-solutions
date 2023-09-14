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
var findTilt = function(root) {
    let totalTilt = 0

    function helper(node) {
        let left = (node.left) ? helper(node.left) : 0
        let right = (node.right) ? helper(node.right) : 0

        // assign tilt to node
        let tilt = Math.abs(left - right)
        totalTilt += tilt

        // return sum of values to find tilt of parents
        return (node.val + left + right)
    }

    if (root != null) helper(root)
    return totalTilt
};