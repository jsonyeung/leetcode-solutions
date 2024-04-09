/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

/*

starting at src node, get neighbours

for each neighbour,
    keep track of current cost spent from src to current node, number of stops remaining

    if (current node is dest node)
        find min cost between min_cost and current cost
        return

    if (number of stops remaining is 0)
        return

return min_cost

*/

let getAdjacencyList = function(edges) {
    let adjList = {}

    for (let [from, to] of edges) {
        adjList[from] = []
        adjList[to] = []
    }

    for (let [from, to, price] of edges) {
        adjList[from].push([to, price])
    }

    return adjList
}

var findCheapestPrice = function(n, flights, src, dst, k) {
    let adjList = getAdjacencyList(flights)

    // if src and dest not within any flights at all
    if (!adjList[src] || !adjList[dst]) return -1

    let minCost = Infinity
    let queue = [[src, 0, -1]] // node, cost, i

    let memo = {}

    while (queue.length > 0) {
        let [node, cost, i] = queue.shift()

        if (node === dst) {
            minCost = Math.min(minCost, cost)
            continue
        }

        if (i === k) {
            continue
        }

        for (let [neighbor, price] of adjList[node]) {
            if (memo[neighbor] < (price + cost)) continue

            memo[neighbor] = price + cost
            queue.push([neighbor, memo[neighbor], i + 1])
        }
    }

    return (minCost === Infinity) ? -1 : minCost
};