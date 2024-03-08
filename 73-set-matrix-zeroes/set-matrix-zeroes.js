/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let stack = []

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (matrix[r][c] === 0) {
                stack.push([r, c])
            }
        }
    }

    while (stack.length > 0) {
        let [r, c] = stack.pop()

        matrix[r] = new Array(matrix[0].length).fill(0)

        for (let dr = 0; dr < matrix.length; dr++) {
            matrix[dr][c] = 0
        }
    }

    return matrix
};