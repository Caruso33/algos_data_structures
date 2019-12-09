class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  lookup(ind) {
    let counter = 0,
      element = this.first;

    while (element) {
      if (counter === ind) return element.val;

      element = element.next;
      counter++;
    }

    return null;
  }

  includes(val) {
    let element = this.first;

    while (element) {
      if (element.val === val) return true;

      element = element.next;
    }

    return false;
  }

  enqueue(val) {
    const node = new Node(val);

    if (this.last) this.last.next = node;
    this.last = node;

    if (!this.first) this.first = node;

    this.length++;

    return this;
  }

  dequeue() {
    if (!this.first) return null;

    const node = this.first;
    this.first = this.first.next;

    if (!this.first) this.last = null;

    this.length--;

    return node;
  }

  peek() {
    if (!this.first) return null;

    return this.first.val;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(5);

console.log(queue.peek());

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue.lookup(1));
console.log(queue.includes(3));

console.log(queue);
