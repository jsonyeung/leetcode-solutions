/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let map = {}
    let results = []

    groupSizes.forEach((groupSize, i) => {
        if (map[groupSize] == null) {
            map[groupSize] = []
        }

        map[groupSize].push(i)

        if (map[groupSize].length === groupSize) {
            results.push(map[groupSize])
            map[groupSize] = []
        }
    })

    return results
};