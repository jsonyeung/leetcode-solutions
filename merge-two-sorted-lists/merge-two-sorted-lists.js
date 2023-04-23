/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*

Assumption:
- cannot create a new result LL
- cannot modify values
- LL pairs can have differing lengths
- can have negative values

[1, 3, 5]  [1, 2, 6] = [1, 1, 2, 3, 5, 6]

[1, 2, 3] [] = [1, 2, 3]


*/

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let sentinel = new ListNode(null)
    let ptr = sentinel

    let ptr1 = list1
    let ptr2 = list2

    while (ptr1 && ptr2) {
        if (ptr1.val <= ptr2.val) {
            ptr.next = ptr1
            ptr1 = ptr1.next
        } else {
            ptr.next = ptr2
            ptr2 = ptr2.next
        }

        ptr = ptr.next
    }

    if (ptr1) ptr.next = ptr1
    if (ptr2) ptr.next = ptr2

    return sentinel.next
};