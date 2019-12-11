// --- Directions
// Given a linked list and integer n, return the element n
// spaces from the last node in the list.  Do not call the
// 'size' method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  if (!list.head) return null;

  let fast = list.head,
    slow = list.head;

  let counter = 0;
  while (counter < n) {
    if (fast.next) fast = fast.next;
    else return null;

    counter++;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}

module.exports = fromLast;
