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
    let i = 0
    let kthSmallestNode = null

    function helper(node) {
        if (node == null) return

        helper(node.left)

        if (++i === k) {
            kthSmallestNode = node.val
            return
        }

        helper(node.right)
    }

    helper(root)
    return kthSmallestNode
};