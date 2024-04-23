/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let numNodes = edges.length + 1
    let parent = Array.from({ length: numNodes }, (_, i) => i)
    let rank = Array.from({ length: numNodes }, () => 1)

    console.log(parent)

    function find(nodeVal) {
        let p = parent[nodeVal]

        while (p !== parent[p]) {
            p = parent[p]
        }

        return p
    }

    function union([from, to]) {
        let fromParent = find(from)
        let toParent = find(to)

        if (fromParent === toParent) {
            return false
        }

        if (rank[toParent] < rank[fromParent]) {
            parent[toParent] = fromParent
            rank[fromParent] += rank[toParent]

        } else {
            parent[fromParent] = toParent
            rank[toParent] += rank[fromParent]
        }

        return true
    }

    for (let edge of edges) {
        if (!union(edge)) return edge
    }
};