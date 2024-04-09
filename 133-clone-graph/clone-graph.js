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
    let map = new Map()

    // traverse, creating new clone nodes and connecting them
    function traverse(node) {
        if (map.has(node)) return map.get(node)

        let cloneNode = new Node(node.val)
        map.set(node, cloneNode)

        for (let neighbor of node.neighbors) {
            // connect cloned nodes to each other
            let cloneNeighbor = traverse(neighbor)
            cloneNode.neighbors.push(cloneNeighbor)
        }

        return cloneNode
    }

    traverse(node)
    return map.get(node)
};