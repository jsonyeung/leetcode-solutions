/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let results = []
    let chunk = []
    let i = 0

    while (i < arr.length) {
        chunk.push(arr[i++])

        if (chunk.length >= size) {
            results.push(chunk)
            chunk = []
        }
    }

    if (chunk.length > 0) {
        results.push(chunk)
    }

    return results
};