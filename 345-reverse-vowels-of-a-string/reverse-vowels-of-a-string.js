/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    let characters = s.split('')
    let left = 0
    let right = s.length - 1

    while (left < right) {
        while ((!vowels.has(s[left])) && left < right) left++
        while ((!vowels.has(s[right])) && left < right) right--

        const temp = characters[left]
        characters[left] = characters[right]
        characters[right] = temp

        left++; right--
    }

    return characters.join('')
};