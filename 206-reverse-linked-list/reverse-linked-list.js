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
    if (head == null) {
        return head
    }

    let sentinel = new ListNode(null, head)
    let pointer = head.next
    
    head.next = null

    while (pointer != null) {
        let temp = pointer.next
        
        pointer.next = sentinel.next
        sentinel.next = pointer
        pointer = temp
    }

    return sentinel.next
};