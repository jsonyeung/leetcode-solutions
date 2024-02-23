/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let total = 0
    
    for (let i = 0; i < s.length; i++) {
        let l = i, r = i

        while (l >= 0 && r < s.length) {
            // console.log(s.slice(l, r+1))
            if (s[l] !== s[r]) break

            l--; r++
            total++
        }

        // for even pairs (e.g. bc -> a+bc+d)
        l = i, r = i + 1

        while (l >= 0 && r < s.length) {
            // console.log(s.slice(l, r+1))
            if (s[l] !== s[r]) break

            l--; r++
            total++
        }
    }

    return total
};
