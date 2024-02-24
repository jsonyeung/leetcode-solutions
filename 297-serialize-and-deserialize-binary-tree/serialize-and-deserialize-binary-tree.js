/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

 /*

1

'1'

    1
  /
2

1_2

    1
  /  \
  2   4
  / \
 3  5


1, 2, 3, null, null, 5, null, null, 4, null, null

 */
const DELIM = ' '

var serialize = function(root) {
    let encoded = ''

    function traverse(node) {
        if (node == null) {
            encoded += 'null' + DELIM
            return
        }

        encoded += node.val + DELIM
        traverse(node.left)
        traverse(node.right)
    }

    traverse(root)
    return encoded.trim()
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let nodes = data.split(DELIM)
    let i = 0

    function traverse() {
        if (nodes[i] === 'null') {
            i++
            return null

        } else {
            const node = new TreeNode(Number(nodes[i++]))
            node.left = traverse()
            node.right = traverse()

            return node
        }
    }

    return traverse()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */