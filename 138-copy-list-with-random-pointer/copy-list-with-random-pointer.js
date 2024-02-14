/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  let map = new Map()
  let pointer = head

  while (pointer != null) {
    map.set(pointer, new Node(pointer.val))
    pointer = pointer.next
  }

  pointer = head

  while(pointer){
    const copyNode = map.get(pointer)
    if(pointer.next) copyNode.next = map.get(pointer.next)
    if(pointer.random) copyNode.random = map.get(pointer.random)
    pointer = pointer.next
  }

  return map.get(head)
}