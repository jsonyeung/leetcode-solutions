/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 /*

Assumptions:
- all prequisites courses total up to numCourses
- courses can have no prerequisites whatsoever

2, [1, 0]
1 <-- 0
= true (no cycle)


3, [[0, 1], [0, 2]]
0<---1     3
^
|
2
= true (no cycle)


2, [[1, 0], [0, 1]]
v----v
0    1
^----^
= false (has cycle)


4, [[0, 1], [0, 2], [3, 0], [1, 3]]
------------
|          v
0<---1<----3
^
|
2
= false (cycle)


4, [[0, 1], [0, 2], [3, 0]]
------------
|          v
0<---1     3
^
|
2
= true

"Find if the directed graph has a cycle"

idea:
Traverse each node to see if we visit the same node backwards (aka, it has a cycle)

 */
var canFinish = function(numCourses, prerequisites) {
    let list = {}

    for (let [to, from] of prerequisites) {
        if (!list[from]) list[from] = []
        list[from].push(to)
    }

    // https://www.youtube.com/watch?v=ZS-UPTd73cM
    // recursive state = values that appear in the recursion stack
    let visited = []
    let recState = []

    // checks to see if has cycle
    function cycleExists(nodeKey) {
        let neighbours = list[nodeKey] || []

        if (recState[nodeKey]) {
            return true
        }

        if (visited[nodeKey]) {
            return false
        }

        visited[nodeKey] = true
        recState[nodeKey] = true

        for (let neighbour of neighbours) {
            if (cycleExists(neighbour)) {
                return true
            }
        }

        recState[nodeKey] = false
        return false
    }

    for (let nodeKey in list) {
        console.log(cycleExists(nodeKey))
        if (cycleExists(nodeKey)) {
            return false
        }
    }

    return true
};