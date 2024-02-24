/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let sorted = stones.sort((a, b) => b - a)

    while (sorted.length > 1) {
        let stoneB = sorted.shift()
        let stoneA = sorted.shift()

        if (stoneB !== stoneA) {
            sorted.push(stoneB - stoneA)
            sorted.sort((a, b) => b - a)
        }
    }

    return sorted[0] || 0
};