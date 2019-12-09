class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  lookup(ind) {
    if (ind < 0 || ind > this.length) return null;

    let element = this.top,
      counter = 0;

    while (element && counter < ind) {
      element = element.next;
      counter++;
    }

    if (element) return element.val;
    else return null;
  }

  includes(val) {
    let element = this.top;

    while (element) {
      if (element.val === val) return true;

      element = element.next;
    }

    return false;
  }

  pop() {
    if (!this.top) return null;

    const node = this.top;
    this.top = node.next;

    this.length--;

    if (this.length === 1) this.bottom = this.top;

    return node;
  }

  push(val) {
    const node = new Node(val);

    node.next = this.top;
    this.top = node;
    if (!this.bottom) this.bottom = node;

    this.length++;

    return this;
  }

  peek() {
    if (!this.top) return null;

    return this.top.val;
  }
}

class StackStack {
  constructor() {
    this.values = [];
  }

  push(val) {
    const node = new Node(val);
    this.values.push(node);

    return this;
  }

  pop() {
    return this.values.pop();
  }

  peek() {
    return this.values[this.values.length - 1];
  }

  lookup(ind) {
    return this.values[ind];
  }

  includes(val) {
    return this.values.includes(val);
  }
}

// const stack = new Stack();
// // const stack = new StackStack();

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(5);

// console.log(stack.peek());

// stack.pop();
// stack.pop();

// console.log(stack.lookup(1));
// console.log(stack.includes(3));

// console.log(stack);
