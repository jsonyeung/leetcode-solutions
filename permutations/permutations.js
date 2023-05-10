/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*

e.g.
1, 2, 3
_ _ _

[2 3] 1 _ _
[3] 1 2 _
[] 1 2 3 *
[3] 1 2 _
[2 3] 1 _ _
[2] 1 3 _
[] 1 3 2 *
[2] 1 3 _
[2 3] 1 _ _
[1 2 3] _ _ _
[1 3] 2 _ _
[3] 2 1 _
[] 2 1 3 *
...
repeat until all "neighbours" exhausted

1, 0
_ _

[1 0] _ _
[0] 1 _
[] 1 0 *
[0]
[0 1] _ _
[1] 0 _
[] 0 1 *
[1] 0
[1 0] _ _
done

assumptions:
- all values are unique

slots = [_ _ _]
set = set of all values

dfs: recursively loop through each value
  put self in slot
  take self out from set

  if slots are full
    add slots to results
  else
    for remaining choices in set
      dfs(slots, set)
    
  take self out from slot
  put self back into set

return results

*/

var permute = function(nums) {
  let results = []

  function dfs(slots, choices, used) {
    if (slots.length === nums.length) {
      results.push([...slots])
      return
    }

    for (let choice of choices) {
      if (!used.has(choice)) {
        slots.push(choice)
        used.add(choice)

        dfs(slots, choices, used)

        slots.pop()
        used.delete(choice)
      }
    }
  }
    
  dfs([], nums, new Set())
  return results
};