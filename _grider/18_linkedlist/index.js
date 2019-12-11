// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertFirst(data) {
    const node = new Node(data);

    const head = this.head;
    node.next = head;
    this.head = node;

    this.length++;

    if (!this.tail) this.tail = node;

    return this;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  removeFirst() {
    const node = this.head;
    this.head = node.next;

    if (!this.head) this.tail = null;

    this.length--;

    return node;
  }

  removeLast() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  insertLast(val) {
    const node = new Node(val);

    let current = this.head;
    if (this.head) {
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    } else this.head = node;

    this.tail = node;

    this.length++;

    return this;
  }

  getAt(ind) {
    if (ind >= this.length) return null;

    let counter = 0;
    let element = this.head;

    while (element) {
      if (counter === ind) return element;
      element = element.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.removeFirst();
    if (index === this.length - 1) return this.removeLast();

    const previous = this.getAt(index - 1);
    const removed = previous.next;

    previous.next = removed.next;

    this.length--;

    return removed;
  }

  insertAt(val, index) {
    if (index <= 0) return this.insertFirst(val);
    if (index >= this.length - 1) return this.insertLast(val);

    const node = new Node(val);

    const previous = this.getAt(index - 1);
    node.next = previous.next;
    previous.next = node;

    this.length++;

    return this;
  }

  forEach(cb) {
    let element = this.head;

    while (element) {
      cb(element);
      element = element.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  size() {
    return this.length;
  }
}

module.exports = { Node, LinkedList };
