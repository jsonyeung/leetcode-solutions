/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let queue = []

    function isInBounds(r, c) {
        return  (
            r >= 0 && c >= 0 && 
            r < mat.length && c < mat[0].length
        )
    }

    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[0].length; c++) {
            if (mat[r][c] === 0) {
                queue.unshift([r, c])
                mat[r][c] = 0
            } else {
                mat[r][c] = -1
            }
        }
    }

    // BFS
    while (queue.length > 0) {
        const [r, c] = queue.pop()
        
        // check neighbours, whether the have been visited
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        for (const [dr, dc] of dirs) {
            const nr = r + dr
            const nc = c + dc

            if (isInBounds(nr, nc) && mat[nr][nc] === -1) {
                queue.unshift([nr, nc])
                mat[nr][nc] = mat[r][c] + 1
            }
        }
    }

    return mat
};