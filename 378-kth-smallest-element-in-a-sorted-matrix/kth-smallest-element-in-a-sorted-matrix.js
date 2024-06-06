/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let heap = []

    for (let i = 0; i < matrix.length; i++) {
        let value = matrix[i][0]
        heap.push([value, i, 0]) // [value, listIndex, indexInList]
    }

    heap.sort((a, b) => a[0] - b[0])

    // pop from heap k times, pushing in the next list item if it exists
    for (let i = 1; i <= k; i++) {
        let [value, listIndex, indexInList] = heap.shift()

        if ((indexInList + 1) < matrix[listIndex].length) {
            heap.push([matrix[listIndex][indexInList + 1], listIndex, indexInList + 1])
        }

        heap.sort((a, b) => a[0] - b[0])
        // console.log(value, heap)

        if (i === k) {
            return value
        }
    }
};