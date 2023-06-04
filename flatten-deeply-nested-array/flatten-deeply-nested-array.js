/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
 /*

do a DFS, keeping track of current depth
    results = []

    for each element in array
        if element is an array and depth + 1 <= n
            add DFS on that element to results
        else
            add element to results
    
    return results


 */
var flat = function (arr, n) {
    let results = []

    for (let el of arr) {
        if (Array.isArray(el) && n > 0) {
            results.push(...flat(el, n - 1))

        } else {
            results.push(el)
        }
    }
    
    return results
};