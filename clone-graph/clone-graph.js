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
    if (node == null) return null

    let cloneMap = new Map()

    function cloneNode(node) {
        let clone = cloneMap.get(node)
        if (clone != null) return clone

        // if clone does not exist, create a clone...
        clone = new Node(node.val)
        cloneMap.set(node, clone)

        // ...and assign its cloned neighbours based on current node
        for (let neighbor of node.neighbors) {
            clone.neighbors.push(cloneNode(neighbor))
        }

        return clone
    }

    return cloneNode(node)
};