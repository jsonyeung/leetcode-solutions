/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists == null || lists.length <= 0) {
        return null
    }

    function mergeLists(listA, listB) {
        let sentinel = new ListNode(null, null)
        let pointer = sentinel

        let pointerA = listA
        let pointerB = listB

        while (pointerA && pointerB) {
            if (pointerA.val <= pointerB.val) {
                pointer.next = pointerA
                pointer = pointer.next
                pointerA = pointerA.next

            } else {
                pointer.next = pointerB
                pointer = pointer.next
                pointerB = pointerB.next
            }
        }

        while (pointerA) {
            pointer.next = pointerA
            pointer = pointer.next
            pointerA = pointerA.next
        }

        while (pointerB) {
            pointer.next = pointerB
            pointer = pointer.next
            pointerB = pointerB.next
        }

        return sentinel.next
    }

    while (lists.length > 1) {
        let mergedList = []

        for (let i = 0; i < lists.length; i += 2) {
            let listA = lists[i]
            let listB = lists[i + 1] || null
            mergedList.push(mergeLists(listA, listB))
        }

        // console.log(mergedList)

        lists = mergedList
    }

    return lists[0]
};