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
    let pointer = head

    while (pointer != null) {
        stack.push(pointer)
        pointer = pointer.next
    }

    let newHead = stack.pop()
    let popped = null
    pointer = newHead

    while (stack.length > 0) {
        popped = stack.pop()
        pointer.next = popped
        pointer = popped
    }

    if (popped != null) {
        popped.next = null
    }

    return newHead
};