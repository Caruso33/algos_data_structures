// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    return (this.children = this.children.filter(child => child.data !== data));
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(cb) {
    const queue = [this.root],
      nodes = [];
    let element = null;

    while (queue.length) {
      element = queue.shift();

      nodes.push(element.value);
      cb(element);

      if (element.children.length)
        element.children.forEach(child => {
          queue.push(child);
        });
    }

    return nodes;
  }

  traverseDF(cb) {
    const nodes = [];

    function traverse(node) {
      nodes.push(node);
      cb(node);

      if (node.children.length) {
        node.children.forEach(child => {
          traverse(child);
        });
      }
    }
    traverse(this.root);

    return nodes;
  }
}

module.exports = { Tree, Node };
