/**
 * @param {number[]} height
 * @return {number}
 */
 /*

 [1,8,6,2,5,4,8,3,7]
              l
              r

min(8, 7) * (l - r) = 7 * 1 = 1

* each time we are calculating area
(height[l] <= height[r]) => inc l
(height[l] >  height[r]) => dec r
(height[l] >  height[r]) => dec r
(height[l] <= height[r]) => inc l
(height[l] <= height[r]) => inc l
...
(height[l] <= height[r]) => inc l

end when (l <= r)

 */
var maxArea = function(height) {
    let l = 0
    let r = height.length - 1

    let maxArea = -Infinity

    while (l <= r) {
        let area = Math.min(height[l], height[r]) * (r - l)

        maxArea = Math.max(maxArea, area)

        if (height[l] <= height[r]) l++
        else r--
    }

    return maxArea
};