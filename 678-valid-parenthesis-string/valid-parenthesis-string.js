/**
 * @param {string} s
 * @return {boolean}
 */
 /*

 

 *)

 **)

*() true

 )*  false
 *(

 (*

push the indices into the stack
    continue valid parenthesis as usual
        given a ')', if no parenthesis in stack exists
            use wildcard. If it doesn't exist return false

match remaining stack and wildcard values

return whether stack still has remaining parenthesis


 */
var checkValidString = function(s) {
    let stack = []
    let wildcards = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            wildcards.push(i)

        } else if (s[i] === '(') {
            stack.push(i)

        } else if (stack.pop() == null) {
            if (wildcards.pop() == null) {
                return false
            }
        }
    }

    while (stack.length > 0 && wildcards.length > 0) {
        if (stack.pop() > wildcards.pop()) {
            return false
        }
    }

    return stack.length <= 0
};