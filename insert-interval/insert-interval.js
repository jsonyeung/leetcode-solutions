/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
/*

find first interval that overlaps with insert interval
    merge and repeat with next interval until next interval is not overlapping


[1, 2] [2, 3] == [1, 3]
[1, 4] [3, 8] == [1, 8]

[3, 5] [1, 3] == [1, 3] [3, 5] == [1, 5]

[3, 5] [4, 4] == [3, 5]


mergable = a2 >= a1 and b2 >= a1

merge([a1, b1], [a2, b2])
    if (a1 > a2) swap arguments

    if is mergable
    return [max(a1, a2), max(b1, b2)]

let merged = newInterval

for each interval
    if interval is mergable with merged
        merged = merge(newInterval, merged)

    else if merged is not null
        push merged to results
    
    


*/

var insert = function(intervals, newInterval) {
    function canMerge(a, b) {
         if (a[0] > b[0]) return canMerge(b, a)
        return (b[0] <= a[1])
    }

    function merge(a, b) {
        if (a[0] > b[0]) return merge(b, a)

        return [
            Math.min(a[0], b[0]),
            Math.max(a[1], b[1])
        ]
    }

    let i = 0
    let merged = newInterval
    let results = []

    // find first mergable interval
    while (i < intervals.length && !canMerge(intervals[i], merged)) {
        results.push(intervals[i++])
    }

    // keep merging until non mergable
    while (i < intervals.length && canMerge(intervals[i], merged)) {
        merged = merge(merged, intervals[i++])
    }

    results.push(merged)

    // push remaining
    while (i < intervals.length) {
        results.push(intervals[i++])
    }

    return results.sort((a, b) => a[0] - b[0])
};