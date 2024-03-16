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
/*

edge case: if no nodes return null

edge case: if 1 node, n = 1
return null

edge case: if the node that needs to be removed is the head

1 -> 2, n = 2

s -> 1 -> 2
^     ^
          ^

2

*/
var removeNthFromEnd = function(head, n) {
    if (head == null || head.next == null) {
        return null
    }

    let sentinel = new ListNode(null, head)

    let prev = sentinel
    let start = sentinel.next
    let end = sentinel

    for (let i = 0; i < n; i++) {
        end = end.next
    }

    // console.log(head, prev.val, start.val, end.val)

    while (end.next) {
        prev = prev.next
        start = start.next
        end = end.next
    }

    // console.log(head, prev.val, start.val, end.val)

    prev.next = start.next
    return sentinel.next
};