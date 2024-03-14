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
    if (head.next == null) return null

    let sentinel = new ListNode(null, head)
    let start = sentinel
    let end = head

    for (let i = 0; i < n; i++) {
        end = end.next
    }

    while (end != null) {
        end = end.next
        start = start.next
    }

    start.next = start.next.next
    return sentinel.next
};