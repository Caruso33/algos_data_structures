// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

const Queue = require("../queue");

function loop() {
  let funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push(function() {
      console.log("My value: " + i);
    });
  }
  return funcs;
}

for (let func of loop()) {
  func()
}

class Stack {
  constructor() {
    this.first = new Queue();
    this.second = new Queue(); // add or remove
  }

  push(data) {
    this.first.add(data);
  }

  pop() {
    let queueHasData = true;
    let last,
      data = this.first.remove();

    while (queueHasData) {
      if (data) {
        last = data;
        data = this.first.remove();

        if (data) {
          this.second.add(last);
          last = data;
        } else queueHasData = false;
      } else queueHasData = false;
    }

    queueHasData = true;
    while (queueHasData) {
      data = this.second.remove();

      if (data) this.first.add(data);
      else queueHasData = false;
    }

    return last;
  }

  peek() {
    let queueHasData = true;
    let last,
      data = this.first.remove();

    while (queueHasData) {
      if (data) {
        last = data;
        data = this.first.remove();
        this.second.add(last);

        if (data) {
          last = data;
        } else queueHasData = false;
      } else queueHasData = false;
    }

    queueHasData = true;
    while (queueHasData) {
      data = this.second.remove();

      if (data) this.first.add(data);
      else queueHasData = false;
    }

    return last;
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.pop(), s.pop(), s.pop());

// class Stack {
//   constructor() {
//     this.data = [];
//   }

//   push(record) {
//     this.data.push(record);
//   }

//   pop() {
//     return this.data.pop();
//   }

//   peek() {
//     return this.data[this.data.length - 1];
//   }
// }

module.exports = Stack;
