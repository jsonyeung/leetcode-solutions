/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let result = []

    words.sort((a, b) => a.length - b.length)

    for (let i = 0; i < words.length; i++) {
        let smaller = words[i]

        for (let j = i + 1; j < words.length; j++) {
            let larger = words[j]

            if (larger.includes(smaller)) {
                result.push(smaller)
                break
            }
        }
    }

    return result
};