/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

 /*

[1 2 3 4 5]
   g  b b b

[1 2 3 4 5]
   g g g b
 

find mid
    if mid is good and (right is bad or end of arr)
        return value
    
    if mid is bad and (left is good or start of arr)
        return value
    
    if mid is bad and left is bad
        find mid on left side

    if mid is good and right is good
        find mid of right side

 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1
        let end = n

        while (start < end) {
            let mid = Math.floor((end - start) / 2) + start

            if (isBadVersion(mid)) {
                end = mid
            } else {
                start = mid + 1
            }
        }

        return end
    };
};