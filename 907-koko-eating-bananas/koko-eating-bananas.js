/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function(piles, h) {
    function getHoursTaken(numBananas) {
        return piles.reduce((acc, val) => {
            return acc + Math.ceil(val / numBananas)
        }, 0)
    }

    let left = 1
    let right = Math.max(...piles)
    let minBananas = Infinity

    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left
        let hoursTaken = getHoursTaken(mid)

        console.log(left, mid, right)

        if (hoursTaken <= h) {
            minBananas = mid
            right = mid - 1

        } else {
            left = mid + 1
        }
    }

    return minBananas
};