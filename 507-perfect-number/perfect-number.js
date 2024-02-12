/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num <= 0) return false
    let sum = 0
    for (let n = 0; n < Math.sqrt(num); n++) {
        if (num % n === 0) {
            sum += n
            
            if (n * n !== num) { // since Math.sqrt(num) ^ 2 = num
                sum += num / n
            }
        }
    }

    // subtracting num from sum since num would be included in the solution
    // which we need to get rid of
    return (sum - num === num)
};