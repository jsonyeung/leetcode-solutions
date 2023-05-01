/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

 /*

Assumption:
- is connected graph

DFS while keeping track of visited nodes
    check all neighbours of current node
        if neigbour was not visited, DFS

 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (node == null) return node
    let visited = new Map()

    function dfs(node) {
        if (visited.has(node)) {
            return visited.get(node)
        }

        let newNode = new Node(node.val)
        visited.set(node, newNode)

        for (let neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor))
        }

        return newNode
    }

    return dfs(node)
};