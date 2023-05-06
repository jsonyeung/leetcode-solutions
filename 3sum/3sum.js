/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*

[1 -1 0 -1]
   c
      l
         r


[1, -1, -1] = -1 (move left)
[1 0 -1] = 0 (add to result, move left and right)
l < r
---
[-1 0 -1] = -2 (move left)
l < r

end
= [1 0 -1]


[1 -1 -1 0]


[1 -1 0] = 0 (add to result, move left and right)
l < r
---
[-1 -1 0] = -2 (move left)
l < r

end
= [1 -1 0]


[0 -2 -3 5 5]
    c  l   r

[0 -2 5] = 3 (move right)
[0 -2 -3] = -5 (mvoe left)
l < r
---
[-2, -3, 5] = 0 (add to results, move left and right)
l < r
---
[-3 5 5] = 7 (move right)
l < r
---
end
= [-2, -3, 5]

sort the array

for i = 0 to array length

    let left = i + 1
    let right = end of array

    while (left < right)
        sum = i + left + right

        if (sum === 0)
            add to results
            move left and right to next unique value

        else if (sum < 0) move left up to next unique value

        else if (sum > 0) move right down to next unique value

    move i up to next unique value


*/


var threeSum = function(nums) {
    // O(nlog n)
    nums = nums.sort((a, b) => a - b) 

    let results = []
    for (let i = 0; i < nums.length; i++) {
        let current = i
        let left = current + 1
        let right = nums.length - 1

        if (nums[current] === nums[current-1]) {
            continue
        }

        while (left < right) {
            let sum = nums[current] + nums[left] + nums[right]

            if (sum === 0) {
                results.push([nums[current], nums[left], nums[right]])
                // move left && right
                do { left++ } while (nums[left] === nums[left-1])
                do { right-- } while (nums[right] === nums[right+1])


            } else if (sum < 0) {
                do { left++ } while (nums[left] === nums[left-1])

            } else {
                // move right
                do { right-- } while (nums[right] === nums[right+1])
            }
        }
    }
    
    return results
};