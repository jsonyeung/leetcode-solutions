/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const getHoursTaken = (k) => {
        return piles.reduce((acc, bananas) => {
            return acc + Math.ceil(bananas / k)
        }, 0)
    }

    let start = 1
    let end = Math.max(...piles)
    let minBananas = Infinity

    while (start <= end) {
        let mid = Math.floor((end - start) / 2) + start
        let hoursTaken = getHoursTaken(mid)

        if (hoursTaken <= h) {
            minBananas = mid
            end = mid - 1

        } else {
            start = mid + 1
        }
    }

    return minBananas
};