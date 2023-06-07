/**
 * @param {number[]} nums
 * @return {number}
 */
/*

1 2 3 = (1 _ 3) = 4
1 2 3 2 = (1 _ 3 _) or (_ 2 _ 2) = 4
1 20 3 = (_ 20 _) = 20
2 1 1 2 = (2 _ _ 2) = 4

*/
var rob = function(nums) {
  // max(rob[0] + rob[1:n], rob[1:n])
  let dp = (new Array(nums)).fill(0)

  // situation: rob i house
  dp[0] = nums[0] // rob 1 house
  dp[1] = Math.max(dp[0], nums[1]) // rob 2 houses

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
  }

  return dp[nums.length - 1]
};