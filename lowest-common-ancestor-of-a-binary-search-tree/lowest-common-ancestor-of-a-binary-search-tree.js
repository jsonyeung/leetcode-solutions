/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function traverse(node) {
        if (node == null) return null

        if (p.val > node.val && q.val > node.val) {
            return traverse(node.right)
        } else if (p.val < node.val && q.val < node.val) {
            return traverse(node.left)

        // p and q must split on left & right, therefore this is the LCA
        } else {
            return node
        }
    }

    return traverse(root)
};