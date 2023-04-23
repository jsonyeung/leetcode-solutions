/**
 * @param {string} s
 * @return {boolean}
 */

/*

() // t
([][]) // t

(] // false
}{ // false
(() // false
([)] // false

stack = []

for each bracket, c
    if c is an opening bracket ( ( or [ or { )
        push to stack
    
    if c is a closing bracket
        if last stack element doesn't exist or not valid pair
            return false

        if last stack element is a valid pair ( () or [] or {} )
            pop last stack element

if stack is not empty
    return false

return true

*/

var isValid = function(s) {
    let stack = []

    let bracketMapping = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    for (let bracket of s) {
        if (bracketMapping[bracket]) {
            stack.push(bracket)

        } else {
            let endBracket = bracketMapping[stack.pop()]
            if (endBracket == null) return false
            if (endBracket !== bracket) return false
        }
    }

    return (stack.length <= 0)
};