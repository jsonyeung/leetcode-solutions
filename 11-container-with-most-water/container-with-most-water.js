/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = (height.length - 1)
    let maxArea = -Infinity

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left)

        maxArea = Math.max(maxArea, area)

        if (height[left] <= height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxArea
};