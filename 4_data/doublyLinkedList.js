class Node {
  constructor(val) {
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const tail = this.tail;
      node.prev = tail;
      tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const tail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tail.prev;
      this.tail.next = null;
    }

    this.length--;

    return tail;
  }

  shift() {
    if (!this.head) return undefined;

    const head = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = head.next;
      this.head.prev = null;
    }

    this.length--;

    return head;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const head = this.head;

      node.next = head;
      head.prev = node;
      this.head = node;
    }
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    let node;

    if (index < Math.floor(this.length / 2)) {
      let counter = 0;
      node = this.head;

      while (counter !== index) {
        node = node.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      node = this.tail;

      while (counter !== index) {
        node = node.prev;
        counter--;
      }
    }
    return node;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    const current = this.get(index);
    if (!current) return false;

    const node = new Node(val);
    node.prev = current.prev;
    current.prev = node;

    node.next = current;
    node.prev.next = node;

    this.length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index);
    if (!node) return undefined;

    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.length--;

    return node;
  }

  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current);
      current = current.next;
    }

    console.log(arr, this.length);
  }
}

// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);

// list.pop();
// list.push(3);
// list.shift();

// list.unshift(1);

// list.set(2, 4);
// list.insert(2, 3);
// list.remove(1);

// list.print();
