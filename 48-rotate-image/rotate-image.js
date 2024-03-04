/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*

1. Transpose the array (swap diagonals)
2. reverse the rows
    
*/
var rotate = function(matrix) {
    // transpose
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < r; c++) {
            if (r === c) continue

            let temp = matrix[r][c]
            matrix[r][c] = matrix[c][r]
            matrix[c][r] = temp
        }
    }

    // reverse row
    for (let r = 0; r < matrix.length; r++) {
        let left = 0
        let right = (matrix.length - 1)

        while (left < right) {
            let temp = matrix[r][left]
            matrix[r][left] = matrix[r][right]
            matrix[r][right] = temp

            console.log(matrix[r])
            left++; right--
        }
    }

    return matrix
};