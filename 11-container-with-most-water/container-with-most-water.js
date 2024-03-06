/**
 * @param {number[]} height
 * @return {number}
 */
 /*

move left until it is greater than right

move right until it is greater than left

keep max area along the way

repeat until left >= right

 */
var maxArea = function(height) {
    let left = 0
    let right = (height.length - 1)

    let maxArea = -Infinity
    console.log(left, right)

    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right])

        maxArea = Math.max(area, maxArea)

        if (height[left] <= height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxArea
};