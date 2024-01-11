/**
 * @param {string} path
 * @return {string}
 */
 /*

get rid of double slashes

split the path by '/'

stack = []
loop through each path
    if (path === '.')
        do nothing
    else if (path === '..')
        stack.pop()
    else
        stack.push(path)

return '/' + stack.join('/')

 */
var simplifyPath = function(path) {
    let directories = path.split('/')
        .filter((value) => value !== "")
    
    let stack = []
    for (let dir of directories) {
        if (dir === ".") {
            continue
        } else if (dir === "..") {
            stack.pop()
        } else {
            stack.push(dir)
        }
    }
    
    return "/" + stack.join("/")
};