/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visited = new Set()

    function wasVisited(row, col) {
        return (visited.has(`${row}, ${col}`))
    }

    function addToVisited(row, col) {
        visited.add(`${row}, ${col}`)
    }

    function traverse(row, col) {
        if (wasVisited(row, col)) return
        if (row < 0 || row >= grid.length) return
        if (col < 0 || col >= grid[0].length) return
        if (grid[row][col] === '0') return

        addToVisited(row, col)

        const dir = [
            [1, 0], [-1, 0], 
            [0, -1], [0, 1]
        ]

        for (const [dr, dc] of dir) {
            traverse(row + dr, col + dc)
        }
    }

    let blobs = 0

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (!wasVisited(row, col) && (grid[row][col] === '1')) {
                traverse(row, col)
                blobs++
            }
        }
    }

    return blobs
};