// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
// If the value isn't in the tree return null.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (this.right && data > this.right.data) this.right.insert(data);
    else if (data > this.data) this.right = new Node(data);
    else if (this.left && data < this.left.data) this.left.insert(data);
    else this.left = new Node(data);
  }

  containsRecursive(data) {
    if (this.data === data) return this;

    if (data > this.data && this.right) return this.right.contains(data);
    else if (data < this.data && this.left) return this.left.contains(data);

    return null;
  }

  contains(data) {
    let element = this;

    while (element) {
      if (element.data === data) return element;

      if (data > element.data) element = element.right;
      else if (data < element.data) element = element.left;
      else return false;
    }
    return null;
  }
}

module.exports = Node;
