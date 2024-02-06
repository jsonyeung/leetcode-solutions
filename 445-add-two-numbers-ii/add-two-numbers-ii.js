/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stackA = [], stackB = []
    let pointer = l1

    while (pointer != null) {
        stackA.push(pointer.val)
        pointer = pointer.next
    }

    pointer = l2
    while (pointer != null) {
        stackB.push(pointer.val)
        pointer = pointer.next
    }

    let carry = 0
    let results = []

    while (stackA.length || stackB.length) {
        let sum = (stackA.pop() || 0) + (stackB.pop() || 0) + carry
        carry = 0

        if (sum >= 10) {
            carry = 1
            sum -= 10
        }

        results.push(sum)
    }

    if (carry === 1) results.push(1)

    let sentinel = new ListNode(null)
    pointer = sentinel

    while (results.length) {
        pointer.next = new ListNode(results.pop())
        pointer = pointer.next
    }

    return sentinel.next
};