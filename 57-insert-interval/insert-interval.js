/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let result = []
    let [startA, endA] = newInterval
    let hasInserted = false

    for (let interval of intervals) {
        const [startB, endB] = interval

        if (hasInserted) {
            result.push(interval)
            continue
        }

        // don't overlap and interval_A is in front
        if (startB > endA) {
            result.push([startA, endA], interval)
            hasInserted = true

        // don't overlap and interval_B is in front,
        // let's check the next interval
        } else if (endB < startA) {
            result.push(interval)

        // merge
        } else {
            startA = Math.min(startA, startB)
            endA = Math.max(endA, endB)
        }
    }

    // if no intervals were mergable and we're at end of array
    if (!hasInserted) {
        result.push([startA, endA])
    }
    
    return result
};