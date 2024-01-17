/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairings = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    let leftBrackets = new Set(Object.values(pairings))
    let stack = []

    for (let char of s) {
        if (leftBrackets.has(char)) {
            stack.push(char)

        } else if (pairings[char] !== stack.pop()) {
            return false
        }
    }

    return stack.length <= 0    
};