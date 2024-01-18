/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/*

map

for each string,
    get the key = sorted string

    if (map[key] doesnt exist)
        map[key] = []

    push string into map[key]

return the values of map


*/
var groupAnagrams = function(strs) {
    let map = new Map()

    for (let str of strs) {
        let key = str.split('').sort().join('')

        if (!map.has(key)) map.set(key, [])
        map.set(key, [...map.get(key), str])
    }

    return Array.from(map.values())
};