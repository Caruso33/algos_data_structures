// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = [];
    this.second = [];
  }

  add(val) {
    while (this.second.length) {
      this.first.push(this.second.pop());
    }
    this.first.push(val);
  }

  remove() {
    while (this.first.length) {
      this.second.push(this.first.pop());
    }
    return this.second.pop();
  }

  peek() {
    if (this.first.length > 0) {
      return this.first[0];
    }

    return this.second[this.second.length - 1];
  }
}

module.exports = Queue;
