class StackWIthArray {
  constructor() {
    this.values = [];
  }

  push(val) {
    this.values.push(val);
    return this;
  }

  pop() {
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

class StackWithSinglyList {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }

    return ++this.size;
  }

  pop() {
    const node = this.first;
    if (!node) return undefined;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    this.size--;

    return node.value;
  }

  print() {
    let current = this.first;
    const arr = [];

    while (current) {
      arr.push(current);
      current = current.next;
    }

    console.log(arr);
  }
}

// const stackSingly = new StackWithSinglyList();
// const stackSingly = new StackWIthArray();

// stackSingly.push(1);
// stackSingly.push(2);
// stackSingly.push(3);

// console.log(stackSingly.pop());

// stackSingly.print();
