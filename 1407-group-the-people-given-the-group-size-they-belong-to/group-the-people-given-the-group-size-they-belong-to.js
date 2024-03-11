/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let groups = {}
    let results = []

    for (let i = 0; i < groupSizes.length; i++) {
        if (groups[groupSizes[i]] == null) {
            groups[groupSizes[i]] = []
        }

        groups[groupSizes[i]].push(i)

        if (groups[groupSizes[i]].length >= groupSizes[i]) {
            results.push(groups[groupSizes[i]])
            groups[groupSizes[i]] = []
        }
    }

    return results
};