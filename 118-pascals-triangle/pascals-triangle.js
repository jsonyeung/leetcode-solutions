/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let rows = [[1], [1, 1]]

    if (numRows <= 2) {
        return rows.slice(0, numRows)
    }

    for (let row = 1; row < numRows - 1; row++) {
        let newRow = [1]

        for (let i = 0; i < (rows[row].length - 1); i++) {
            let current = rows[row][i]
            let next = rows[row][i+1]
            newRow.push(current + next)
        }

        newRow.push(1)
        rows.push(newRow)
    }

    return rows
};