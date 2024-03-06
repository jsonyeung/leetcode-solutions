/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head == null || head.next == null) {
        return head
    }

    let stack = []
    let pointer = head.next

    while (pointer != null) {
        stack.push(pointer)
        pointer = pointer.next
    }

    let left = 0
    let right = (stack.length - 1)
    let ordered = []

    while (left <= right) {
        if (left === right) {
            ordered.push(stack[right])
        } else {
            ordered.push(stack[right])
            ordered.push(stack[left])
        }

        left++; right--
    }

    head.next = ordered[0]

    for (let i = 0; i < ordered.length; i++) {
        ordered[i].next = (ordered[i+1]) ? ordered[i+1] : null
    }

    return head
};