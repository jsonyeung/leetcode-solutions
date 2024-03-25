/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const results = []
    const partition = []

    function isPalindrome(string) {
        return string.split("").reverse().join('') === string
    }

    function helper(i = 0) {
        if (i >= s.length) {
            results.push(partition.slice())
            return
        }

        for (let j = i; j < s.length; j++) {
            let substr = s.slice(i, j + 1)

            if (isPalindrome(substr)) {
                partition.push(substr)
                helper(j + 1)
                partition.pop()
            }
        }
    }

    helper()
    return results
};