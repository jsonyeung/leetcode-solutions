/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let remaining = stones.slice()

    while (remaining.length > 1) {
        remaining = remaining.sort((a, b) => a - b)
        remaining.push(Math.abs(remaining.pop() - remaining.pop()))
    }

    return remaining
};


/*

[8, 7, 4, 2, 1, 1]
[1, 4, 1, 1]
*/