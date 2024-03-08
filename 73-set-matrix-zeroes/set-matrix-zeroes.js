/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = []
    let col = []

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (matrix[r][c] === 0) {
                row[r] = true
                col[c] = true
            }
        }
    }

    for (let r = 0; r < matrix.length; r++) {
        if (!row[r]) continue
        matrix[r] = new Array(matrix[0].length).fill(0)
    }

    for (let c = 0; c < matrix[0].length; c++) {
        if (!col[c]) continue
        
        for (let r = 0; r < matrix.length; r++) {
            matrix[r][c] = 0
        }
    }

    return matrix
};