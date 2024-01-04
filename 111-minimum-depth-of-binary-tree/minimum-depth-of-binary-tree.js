/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

    "find the closest leaf node with minDepth"

    minDepth = 1

    DFS on each path, terminating if depth > minDepth
        keep track of minDepth

 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root == null) return 0
    
    let min = Infinity

    function traverse(node, depth = 1) {
        if (depth >= min) return

        if (!node.left && !node.right) {
            min = (depth < min) ? depth : min
        }

        if (node.left) traverse(node.left, depth + 1)
        if (node.right) traverse(node.right, depth + 1)
    }

    traverse(root)
    return min
};