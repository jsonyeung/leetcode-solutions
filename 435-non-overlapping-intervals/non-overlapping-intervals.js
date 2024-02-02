/**
 * @param {number[][]} intervals
 * @return {number}
 */
 /*
 https://medium.com/swlh/non-overlapping-intervals-f0bce2dfc617
 */

var eraseOverlapIntervals = function(intervals) {
    intervals.sort(([a], [b]) => a - b)

    let count_remove = 0
    let current = 0

    for (let i = 1; i < intervals.length; i++) {
        let b = intervals[current][1]
        let c = intervals[i][0]
        let d = intervals[i][1]

        if (b > c) {
            count_remove++
            if (d < b) current = i

        } else {
            current = i
        }
    }

    return count_remove
};