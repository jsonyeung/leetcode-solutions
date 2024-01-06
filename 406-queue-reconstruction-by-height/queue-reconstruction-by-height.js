/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let sorted = people.sort(([ha], [hb]) => ha - hb)
    let results = Array.from({ length: people.length }, () => null)

    console.log(sorted)

    sorted.forEach(([hi, ki]) => {
        let count = ki

        for (let j = 0; j < results.length; j++) {
            let isOccupied = results[j] != null

            if (isOccupied) {
                if (results[j][0] >= hi) count--
                continue
            }

            if (!isOccupied && count-- <= 0) {
                results[j] = [hi, ki]
                break
            }
        }
    })

    return results
};