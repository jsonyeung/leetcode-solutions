/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1
    let right = Math.max(...piles)

    function getHoursTaken(bananas) {
        return piles.reduce((acc, val) => {
            return acc + Math.ceil(val / bananas)
        }, 0)
    }

    let minBananas = Infinity

    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left
        let hoursTaken = getHoursTaken(mid)

        // console.log(mid, hoursTaken)

        if (hoursTaken <= h) {
            minBananas = mid
            right = mid - 1

        } else {
            left = mid + 1
        }
    }

    return minBananas
};

/*

[1 2 3 4 5 6 7 8 9 10 11]


*/