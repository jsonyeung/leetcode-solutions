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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root == null) return []

  let queue = []
  let row = [root]
  let results = []

  while (row.length > 0) {
    results.push(row.map((node) => node.val))
    queue = row
    row = []

    while (queue.length > 0) {
      let node = queue.pop()

      if (node.right) row.unshift(node.right)
      if (node.left) row.unshift(node.left)
    }
  }

  return results
};