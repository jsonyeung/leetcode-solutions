/**
 * @param {number[]} height
 * @return {number}
 */
 /*

 set left to left of array and right ot right of array

maxArea = -Infinity

 while left < right
    area = area of left and right sides
    maxArea = max(maxArea, area)
    
    if left is smallest side, move left
    if right is mallest side, move right


 */
var maxArea = function(height) {
    let left = 0, right = (height.length - 1)
    let maxArea = -Infinity

    while (left < right) {
        let area = (right - left) * Math.min(height[right], height[left])
        maxArea = Math.max(maxArea, area)

        if (height[left] <= height[right]) left++
        else right--
    }

    return maxArea
};