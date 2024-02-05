/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []

    for (let char of s) {
        if (char === ']') {
            let curr = stack.pop()
            let str = ''

            while (curr !== '[') {
                str = curr + str
                curr = stack.pop()
            }

            let repeatCount = ''

            while (!isNaN(stack[stack.length - 1])) {
                repeatCount = stack.pop() + repeatCount
            }

            const results = str.repeat(parseInt(repeatCount))
            stack.push(results)

        } else {
            stack.push(char)
        }
    }

    return stack.join('')
};