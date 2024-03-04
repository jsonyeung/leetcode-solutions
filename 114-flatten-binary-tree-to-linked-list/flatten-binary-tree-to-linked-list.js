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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    function traverse(node) {
        if (node == null) {
            return null
        }

        let nodeLeft = node.left
        node.left = null
        
        let left = traverse(nodeLeft)

        if (left != null) {
            let pointer = left

            while (pointer.right != null) {
                pointer = pointer.right
            }

            pointer.right = traverse(node.right)
            node.right = left
            
        } else {
            node.right = traverse(node.right)
        }

        // console.log(root)
        return node        
    }

    return traverse(root)
};