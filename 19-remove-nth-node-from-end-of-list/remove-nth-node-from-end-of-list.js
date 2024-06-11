/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // if n == 1 then make sentinel.next to next value return
    let sentinel = new ListNode(null, head)

    /*

    S -> 1 -> 2 -> 3 -> 4 -> 5, n = 2
    s    n    e

    S -> 1
    s    n    
         e
         
    */

    let start = sentinel
    let next = sentinel.next
    let end = sentinel

    for (let i = 0; i < n; i++) {
        end = end.next
    }

    while (end.next != null) {
        start = start.next
        next = next.next
        end = end.next
    }

    start.next = next.next
    next.next = null
    return sentinel.next
};