/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = []
    let fringe = []

    let seen = new Set()
    let total = 0

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 1) {
                total++

            } else if (grid[r][c] === 2) {
                fringe.push([r, c])
            }
        }
    }

    const DIRS = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const getKey = (r, c) => `${r}_${c}`

    let minute = 0

    while (fringe.length > 0) {
        queue = fringe
        fringe = []

        while (queue.length > 0) {
            let entry = queue.shift()

            seen.add(getKey(entry[0], entry[1]))

            for (let dir of DIRS) {
                let cur_r = entry[0] + dir[0]
                let cur_c = entry[1] + dir[1]
                let curEntry = grid?.[cur_r]?.[cur_c]

                console.log(curEntry, cur_r, cur_c)

                if (!seen.has(getKey(cur_r, cur_c)) && curEntry === 1) {
                    fringe.push([cur_r, cur_c])
                    seen.add(getKey(cur_r, cur_c))
                    total--
                }
            }
        }

        if (fringe.length > 0) {
            minute++
        }
    }

    return (total > 0) ? -1 : minute
};