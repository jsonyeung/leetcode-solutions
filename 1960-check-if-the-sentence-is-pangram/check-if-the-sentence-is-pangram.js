/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let alphabet = new Set()

    for (let char of sentence) {
        alphabet.add(char)
    }

    return (alphabet.size === 26)
};