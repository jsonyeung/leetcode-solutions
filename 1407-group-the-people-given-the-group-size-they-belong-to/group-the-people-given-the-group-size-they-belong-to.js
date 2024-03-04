/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let map = {}

    groupSizes.forEach((groupKey, i) => {
        if (map[groupKey] == null) {
            map[groupKey] = [[]]
        }

        let group = map[groupKey]

        if (group[group.length - 1].length >= groupKey) {
            map[groupKey].push([])
        }

        map[groupKey][map[groupKey].length - 1].push(i)
    })

    let results = []

    for (let array of Object.values(map)) {
        results = results.concat(array)
    }

    return results
};
/*

{

    3: [[0 1 2], [3]]
}

loop through keys and concat

*/