/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*

1. Transpose the array (swap diagonals)
2. reverse the array
    
*/
var rotate = function(matrix) {
    // transpose array
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            if (i !== j) {
                const temp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
            }
        }
    }

    // reverse rows
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length / 2; j++) {
            const temp = matrix[i][j]
            matrix[i][j] = matrix[i][matrix[i].length - j - 1]
            matrix[i][matrix[i].length - j - 1] = temp
        }
    }

    return matrix
};