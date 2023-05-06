/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 /*
     5
  1     9
      4    10
= false (4 is < 5)

[null null] 5
[5 null] 1 (1 < 5)
[5 5] 9 (9 > 5)
[5 5] 4 (4 < 9 but 4 not > 5)


     5
  1     9
    30
= false (30 is > 5)

keep track of a upperbound and lowerbound
    to keep track of the minumum value must hit


 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function dfs(node, lowerbound = null, upperbound = null) {
        if (node == null) return true

        if ((lowerbound != null && node.val <= lowerbound) || 
            (upperbound != null && node.val >= upperbound)) {
            return false
        }

        return dfs(node.left, lowerbound, node.val) && dfs(node.right, node.val, upperbound)
    }

    return dfs(root)
};