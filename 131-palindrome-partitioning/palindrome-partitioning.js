/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let results = []
    let partition = []

    function isPalindrome(string) {
        return (string.split('').reverse().join('') === string)
    }

    function helper(i = 0) {
        if (i >= s.length) {
            results.push([...partition])
            return
        }

        for (let j = i + 1; j <= s.length; j++) {
            let current = s.slice(i, j)

            // console.log(current, isPalindrome(current))

            if (isPalindrome(current)) {
                partition.push(current)
                helper(j)
                partition.pop()
            }
        }
    }

    helper()
    return results
};