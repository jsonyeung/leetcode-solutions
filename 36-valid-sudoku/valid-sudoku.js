/**
 * @param {character[][]} board
 * @return {boolean}
 */

const makeHashmapGrid = (rows, cols = rows) => {
    return Array.from({ length: rows }, () => {
        if (cols === 1) return new Set()
        return Array.from({ length: cols }, () => (
            new Set()
        ))
    })
}

var isValidSudoku = function(board) {
    let mapRows = makeHashmapGrid(9, 1)
    let mapCols = makeHashmapGrid(9, 1)
    let map3X3 = makeHashmapGrid(3, 3)

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {

            if (board[r][c] === '.') {
                continue
            }

            // check row
            if (mapRows[r].has(board[r][c])) {
                return false
            }

            // check column
            if (mapCols[c].has(board[r][c])) {
                return false
            }

            // check 3x3
            let r1 = Math.floor(r / 3)
            let c1 = Math.floor(c / 3)
            if (map3X3[r1][c1].has(board[r][c])) {
                return false
            }

            mapRows[r].add(board[r][c])
            mapCols[c].add(board[r][c])
            map3X3[r1][c1].add(board[r][c])
        }
    }

    return true
};