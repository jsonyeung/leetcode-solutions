/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

 if (node is null) return null

 flattenedChild = helper(root.left)

 if (flattenedChild != null) {
    while(flattenedChild.right exists)
        move to the very right and set 
            mostRightChild.right = root.right

    root.right = helper(root.right)
 }

 return root

 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root == null) return root

    const flattenedChild = flatten(root.left)

    if (flattenedChild != null) {
        // attach very end of flattenedChild to right of root
        let pointer = flattenedChild
        while (pointer.right != null) {
            pointer = pointer.right
        }
        
        pointer.right = flatten(root.right)
        root.right = flattenedChild
        root.left = null
        
    } else {
        flatten(root.right)
    }

    return root
};