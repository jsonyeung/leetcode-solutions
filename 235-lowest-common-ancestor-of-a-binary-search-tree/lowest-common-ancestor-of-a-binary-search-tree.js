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
 /*

For a BST node

if p and q < node
    traverse left
if p and q > node
    traverse right

else they must be split between current node (either left and right or node itself is p or q)
    return node

 */
var lowestCommonAncestor = function(root, p, q) {
    function traverse(node) {
        if (p.val < node.val && q.val < node.val) {
            return traverse(node.left)
        } else if (p.val > node.val && q.val > node.val) {
            return traverse(node.right)

        } else {
            return node
        }
    }

    return traverse(root)
};