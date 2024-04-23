/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var getAdjacencyList = function(edges) {
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

    function hasValidColoring(nodeVal) {
        let queue = [nodeVal]
        colorings[nodeVal] = "W"

        while (queue.length > 0) {
            const node = queue.shift()

            for (let neighbor of adjList[node]) {
                if (colorings[neighbor] == null) {
                    colorings[neighbor] = (colorings[node] === "W") ? "B" : "W"
                    queue.push(neighbor)

                } else if (colorings[neighbor] === colorings[node]) {
                    return false
                }
            }
        }

        return true
    }
    
    for (let nodeVal in adjList) {
        if (colorings[nodeVal] != null) continue

        if (!hasValidColoring(nodeVal)) {
            return false
        }
    }

    return true
};