/**
 * @param {number[]} nums
 * @return {number}
 */
 /*

 money = 0, i = 0

 rob this house and skip next house

 skip and move to the next house

 */
var rob = function(nums) {
    let memo = {}

    function helper(i = 0, money = 0) {
        if (i >= nums.length) {
            return money
        }

        let key = [i, money].join('_')
        
        if (memo[key] != null) {
            return memo[key]
        }

        return memo[key] = Math.max(
            helper(i+2, money + nums[i]),
            helper(i+1, money)
        )
    }

    return helper()
};