/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (node == null) return node
    let hashmap = new Map()

    function traverse(node) {
        if (hashmap.has(node)) {
            return hashmap.get(node)
        }

        let clonedNode = new Node(node.val)
        hashmap.set(node, clonedNode)

        for (let neighbor of node.neighbors) {
            let cloneNeighbor = traverse(neighbor)
            clonedNode.neighbors.push(cloneNeighbor)
        }

        return clonedNode
    }

    traverse(node)
    return hashmap.get(node)
};