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
    const queue = new MinPriorityQueue({ priority: (x) => x.val })

    for (let head of lists) {
        if (head != null) {
            queue.enqueue(head)
        }
    }

    let results = new ListNode()
    let pointer = results

    while (!queue.isEmpty()) {
        const node = queue.dequeue().element

        pointer.next = new ListNode(node.val)
        pointer = pointer.next

        if (node.next) {
            queue.enqueue(node.next)
        }
    }

    return results.next
};