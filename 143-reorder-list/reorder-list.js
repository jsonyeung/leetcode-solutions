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

    let slow = head
    let fast = head.next

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let prev = null
    let second = slow.next

    slow.next = null

    while (second) {
        let temp = second.next
        second.next = prev
        prev = second
        second = temp
    }

    console.log(head, prev)

    let listA = head
    let listB = prev

    while (listB) {
        let nextA = listA.next
        let nextB = listB.next

        listA.next = listB
        listB.next = nextA

        listA = nextA
        listB = nextB
    }
};