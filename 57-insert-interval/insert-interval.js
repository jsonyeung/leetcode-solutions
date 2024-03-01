/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let currentInterval = newInterval
    let hasInserted = false

    let results = []

    for (let i = 0; i < intervals.length; i++) {
        let [a, b] = intervals[i]
        let [c, d] = currentInterval

        if (hasInserted) {
            results.push(intervals[i])
            continue
        }

        if (b < c) {
            results.push(intervals[i])

        } else if (a > d) {
            results.push(currentInterval, intervals[i])
            hasInserted = true

        } else {
            currentInterval = [Math.min(a, c), Math.max(b, d)]
        }
    }

    if (!hasInserted) {
        results.push(currentInterval)
    }

    return results
};