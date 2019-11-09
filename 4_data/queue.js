class QueueWithArray {
  constructor() {
    this.values = [];
  }

  // push / shift OR unshift / pop
  // will always involve reindexing
  enqueue(val) {
    this.values.unshift(val);

    return this;
  }

  dequeue() {
    return this.values.pop();
  }

  print() {
    console.log(this.values);
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class QueueWithSingly {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);

    if (!this.first) {
      this.first = node;
    } else {
      this.last.next = node;
    }

    this.last = node;
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return undefined;

    const node = this.first;

    if (this.first === this.last) {
      this.last === null;
      this.first = null;
    } else this.first = this.first.next;

    this.size--;

    return node;
  }

  print() {
    let current = this.first;
    const arr = [];

    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

// const queueArray = new QueueWithArray();
// const queueArray = new QueueWithSingly();

// queueArray.enqueue(1);
// queueArray.enqueue(2);
// queueArray.enqueue(3);

// console.log(queueArray.dequeue());

// queueArray.print();
