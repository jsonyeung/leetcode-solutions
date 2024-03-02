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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSameSubroot(node, subRoot) {
    if (node == null && subRoot == null) {
        return true
    }

    if ((node == null && subRoot != null) || (subRoot == null && node != null)) {
        return false
    }

    if (node.val !== subRoot.val) {
        return false
    }

    return isSameSubroot(node.left, subRoot.left) && isSameSubroot(node.right, subRoot.right)
}

var isSubtree = function(root, subRoot) {
    if (isSameSubroot(root, subRoot)) {
        return true
    }

    if (root == null) {
        return false
    }

    return (
        isSubtree(root.left, subRoot) || 
        isSubtree(root.right, subRoot)
    )
};