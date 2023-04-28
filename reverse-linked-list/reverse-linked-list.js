/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null) return head

    let stack = []
    let ptr = head

    while (ptr != null) {
        stack.push(ptr)
        ptr = ptr.next
    }

    let newHead = stack.pop()
    ptr = newHead

    while (stack.length > 0) {
        ptr.next = stack.pop()
        ptr = ptr.next
    }

    ptr.next = null
    return newHead
};