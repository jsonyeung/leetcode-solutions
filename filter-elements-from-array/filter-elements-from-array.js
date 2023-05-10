/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let results = []

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            results.push(arr[i])
        }
    }

    return results
};