/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
 /*
   w   b
   1 - 2 
    \    \
   b 3    4 w

   https://www.youtube.com/watch?v=0ACfAqs8mm0

 */
function getAdjacencyList(edges) {
    let adjList = {}

    for (let [from, to] of edges) {
        adjList[from] = []
        adjList[to] = []
    }

    for (let [from, to] of edges) {
        adjList[from].push(to)
        adjList[to].push(from)
    }

    return adjList
}

var possibleBipartition = function(n, dislikes) {
    let adjList = getAdjacencyList(dislikes)
    let colorings = {}

    function isBipartite(node) {
        let queue = [node]
        colorings[node] = 'W'

        while (queue.length > 0) {
            let node = queue.shift()

            for (let neighbor of adjList[node]) {
                if (colorings[neighbor] == null) {
                    colorings[neighbor] = (colorings[node] === 'W') ? 'B' : 'W'
                    queue.push(neighbor)

                } else if (colorings[neighbor] === colorings[node]) {
                    return false
                }
            }
        }

        return true
    }

    // there may be subgraphs, so check if true
    for (let node of Object.keys(adjList)) {
        // skip if node is already processed
        if (colorings[node] != null) continue

        if (!isBipartite(node)) {
            return false
        }
    }

    return true
};