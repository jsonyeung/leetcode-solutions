/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 /*

 ABCBA, k = 1
   ^
     ^

 1, set(A:1)
 2, set(A:1, B:1)
 2, set(A:1, B:1, C:1) > k + 1 => move start until set <= k + 1
 2, set(B:1, C:1)
 3, set(B:2, C:1)
 3, set(B: 2, C:1, A:1) > k + 1 => move start until set <= k + 1
 3, set(B: 1, C:1, A:1) > k + 1 => move start until set <= k + 1
 3, set(B: 1, A) > k + 1 => move start until set <= k + 1
 max was 3 return


 */
var characterReplacement = function(s, k) {
   let left = 0;
   let right = 0;
   let maxCharCount = 0;

   const visited = {};

   while (right < s.length) {
      const char = s[right];
      visited[char] = visited[char] ? visited[char] + 1 : 1;

      if (visited[char] > maxCharCount) maxCharCount = visited[char];

      const replacementChars = (right - left + 1) - maxCharCount

      if (replacementChars > k) {
         visited[s[left]]--;
         left++;
      }

      right++;
   }

   return right - left;
};