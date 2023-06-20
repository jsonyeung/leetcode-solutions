/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
 /*

 [10, -999] = [-999]
 [100, 10, -99] = [100]
 [100, -200, 10] = [-200, 10]
 [-999, 10] = [-999, 10]

 */
var asteroidCollision = function(asteroids) {
    let remaining = []

    for (const asteroid of asteroids) {
        if (asteroid > 0) {
            remaining.push(asteroid)

        } else {
            while (remaining.length >= 0) {
                let last = remaining[remaining.length - 1]
                
                if (last == null || last < 0) {
                    remaining.push(asteroid)
                    break
                }

                if ((last + asteroid) > 0) break
                remaining.pop()
                if ((last + asteroid) === 0) break
            }
        }
    }

    return remaining
};