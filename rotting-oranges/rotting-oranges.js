/**
 * @param {number[][]} grid
 * @return {number}
 */
/*

rotten = []
queue = []
count = 0
fresh = 0

search through each entry
    if is rotten put into rotten
    if is fresh, increment fresh counter

while queue is not empty
    rotten = queue
    queue = []

    while rotten has rotten fruits
        let last = popped from rotten
        
        for each neighbour of last
            if neighbor is fresh, add to queue

if fresh > 0 return -1
else return count

*/

var orangesRotting = function(grid) {
    let rotten = []
    let queue = []

    let count = -1
    let fresh = 0

    // initialize rotten
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c])

            } else if (grid[r][c] === 1) {
                fresh += 1
            }
        }
    }

    if (fresh === 0) return 0

    // bfs
    while (queue.length > 0) {
        rotten = queue
        queue = []

        while (rotten.length > 0) {
            let [r, c] = rotten.pop()
            let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

            for (let [dr, dc] of dirs) {
                let nr = r + dr
                let nc = c + dc

                if ((nr >= 0 && nr < grid.length) && (nc >= 0 && nc < grid[0].length)) {
                    if (grid[nr][nc] === 1) {
                        queue.push([nr, nc])
                        grid[nr][nc] = 2
                        fresh -= 1
                    }
                }
            }
        }

        count += 1
    }

    return (fresh > 0) ? -1 : count
};