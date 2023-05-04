/**
 * @param {character[][]} grid
 * @return {number}
 */
/*
    Assumptions:
    - Can have no islands at all
    - Two islands are considered separate if their tiles are not connected adjacently


visited = set()
islands = 0

search each tile on grid
- if tile is a 1 and not visited, run DFS
    assign all tiles as visited after DFS
    islands += 1

*/
var numIslands = function(grid) {
    let visited = new Set()

    function getValidNeighbours(r, c) {
        let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
        let neighbours = []

        for (let [dr, dc] of dirs) {
            let nr = r + dr
            let nc = c + dc

            if (nr < 0 || nr >= grid.length) continue
            if (nc < 0 || nc >= grid[0].length) continue

            if (grid[nr][nc] === '0') continue
            if (visited.has([nr, nc].toString())) continue

            neighbours.push([nr, nc])
        }

        return neighbours
    }

    function dfs(r, c) {
        let validNeighbours = getValidNeighbours(r, c)

        if (validNeighbours <= 0) return

        for (let [nr, nc] of validNeighbours) {
            visited.add([nr, nc].toString())
            dfs(nr, nc)
        }
    }

    let numIslands = 0

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === '1' && !visited.has([r, c].toString())) {
                dfs(r, c)
                numIslands += 1
            }
        }
    }

    return numIslands
};