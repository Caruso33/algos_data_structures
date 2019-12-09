class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(val) {
    let node;
    if (val) node = new Node(val);

    this.head = node || null;
    this.tail = node || null;
    this.length = node ? 1 : 0;
  }

  prepend(val) {
    const node = new Node(val);

    if (!this.head) {
      this.tail = node;
    } else {
      const head = this.head;
      node.next = head;
      head.prev = node;
    }
    this.head = node;
    this.length++;

    return this;
  }

  append(val) {
    const node = new Node(val);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  lookup(ind) {
    if (ind > this.length - 1) return null;

    let current, counter;

    if (ind < Math.floor(this.length / 2)) {
      current = this.head;
      counter = 0;

      while (counter !== ind) {
        current = current.next;
        counter++;
      }
    } else {
      current = this.tail;
      counter = this.length - 1;

      while (counter !== ind) {
        current = current.prev;
        counter--;
      }
    }

    return current;
  }

  insert(ind, val) {
    if (ind > this.length) return null;
    else if (ind === 0) return this.prepend(val);
    else if (ind === this.length) return this.append(val);

    const node = new Node(val);

    let current = this.lookup(ind);

    current.prev.next = node;
    node.prev = current.prev;

    node.next = current;
    current.prev = node;

    this.length++;

    return this;
  }

  remove(ind) {
    if (ind < 0 || ind > this.length - 1) return null;
    if (ind === 0) {
      const head = this.head;
      this.head = head.next;
      head.prev = null;

      if (!this.head) {
        this.tail = null;
      }

      this.length--;

      return head;
    }

    let current = this.lookup(ind);

    current.prev.next = current.next;

    if (ind === this.length - 1) {
      this.tail = current.prev;
    } else {
      current.next.prev = current.prev;
    }

    this.length--;

    return current;
  }

  reverse() {
    let last = null,
      current = this.head,
      next = null;

    this.head = this.tail;
    this.tail = current;

    while (current) {
      next = current.next;

      current.prev = next;
      current.next = last;

      last = current;
      current = next;
    }

    return this;
  }

  print() {
    const array = [];
    let current = this.head;

    while (current) {
      array.push(current.val);
      current = current.next;
    }

    console.log(
      `nodes: ${array}, length: ${this.length}`
      //   this.head,
      //   this.tail
    );
  }
}

// const llist = new LinkedList();

// llist.print();

// llist.prepend(3);
// llist.prepend(2);
// llist.append(5);
// llist.append(6);

// llist.print();

// llist.insert(0, 1);
// llist.insert(3, 4);
// llist.insert(6, 7);

// console.log(llist.remove(6));
// console.log(llist.remove(0));

// // console.log(llist.lookup(0));

// llist.print();

// llist.reverse();

// llist.print();
// console.log(JSON.stringify(llist, undefined, 2));
