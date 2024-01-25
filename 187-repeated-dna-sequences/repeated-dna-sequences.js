/**
 * @param {string} s
 * @return {string[]}
 */
 /*

    place combinations in a hash table,
    when value is found in hashtable, push to results set

    return array of results

 */
var findRepeatedDnaSequences = function(s) {
    const possibilities = new Set()
    const results = new Set()

    for (let i = 0; i < s.length - 9; i++) {
        const substring = s.slice(i, i + 10)

        if (possibilities.has(substring)) {
            results.add(substring)
        }

        possibilities.add(substring)
    }

    return Array.from(results)
};