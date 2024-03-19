/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let leftBound = 0
    let rightBound = (matrix[0].length - 1)

    let topBound = 0
    let bottomBound = (matrix.length - 1)

    let results = []

    while ((leftBound <= rightBound) && (topBound <= bottomBound)) {
        for (let i = leftBound; i <= rightBound; i++) {
            results.push(matrix[topBound][i])
        }

        topBound++

        for (let j = topBound; j <= bottomBound; j++) {
            results.push(matrix[j][rightBound])
        }

        rightBound--

        if (topBound <= bottomBound) {
            for (let i = rightBound; i >= leftBound; i--) {
                results.push(matrix[bottomBound][i])
            }
        }

        bottomBound--

        if (leftBound <= rightBound) {
            for (let j = bottomBound; j >= topBound; j--) {
                results.push(matrix[j][leftBound])
            }
        }

        leftBound++
    }

    return results
};