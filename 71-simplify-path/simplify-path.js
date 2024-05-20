/**
 * @param {string} path
 * @return {string}
 */
 /*

 split path by "/"

 for each part in the path
    if part is '.'
        do nothing

    if part is '..'
        pop from stack
    
    push into stack

 */
var simplifyPath = function(path) {
    let parts = path.split('/')
    let stack = []

    for (let part of parts) {
        if (part === '' || part === '.') continue
        else if (part === '..') stack.pop()
        else stack.push(part)
    }

    return '/' + stack.join('/')
};