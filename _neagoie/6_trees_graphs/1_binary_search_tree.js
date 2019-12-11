class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);

    if (!this.root) return (this.root = node);

    let element = this.root,
      lastElement = null;
    while (element) {
      lastElement = element;

      if (element.val > val) element = element.left;
      else element = element.right;
    }
    if (lastElement.val > val) lastElement.left = node;
    else lastElement.right = node;

    return this;
  }

  lookup(val) {
    if (!this.root) return null;

    let element = this.root;
    while (element) {
      if (element.val === val) return element;

      if (element.val > val) element = element.left;
      else element = element.right;
    }
    return null;
  }

  remove(val) {
    if (!this.root) return null;

    let element = this.root,
      lastElement = null,
      removedNode = null,
      removedParent = null;
    while (element) {
      if (element.val === val) break;

      lastElement = element;
      if (element.val > val) element = element.left;
      else element = element.right;
    }
    removedNode = element;
    removedParent = lastElement;

    // not found
    if (!removedNode) return null;

    element = removedNode.right;
    lastElement = null;

    while (element) {
      if (!element.left) break;

      lastElement = element;
      element = element.left;
    }
    // no right path present, replace node with left child
    if (!element) element = removedNode.left;

    // update parent
    if (!removedParent) this.root = element;
    else if (removedNode.val > removedParent.val) removedParent.right = element;
    else removedParent.left = element;

    // update parent of replacing node
    if (lastElement) lastElement.left = element.right;

    // update right and left path of replacing node
    if (removedNode.right !== element) element.right = removedNode.right;
    if (removedNode.left !== element) element.left = removedNode.left;

    return this;
  }

  traverse(node) {
    const newNode = { val: node.val };

    if (node.left) newNode.left = this.traverse(node.left);
    if (node.right) newNode.right = this.traverse(node.right);

    return newNode;
  }

  _invalidate(val) {
    // to test validate function
    const node = new Node(val);

    const right = this.root.right;
    const left = this.root.left;

    if (right.val > val) {
      node.left = left.left;
      node.right = left.right;
      this.root.left = node;
    } else {
      node.left = right.left;
      node.right = right.right;
      this.root.right = node;
    }
  }

  bfs() {
    // shortest path, closer nodes <> more memory
    let element = this.root;
    let nodes = [];
    let queue = [element];

    while (queue.length) {
      element = queue.shift();

      nodes.push(element.val);

      if (element.left) queue.push(element.left);
      if (element.right) queue.push(element.right);
    }

    return nodes;
  }

  bfsRecursive(queue, nodes) {
    if (!queue.length) return nodes;

    const element = queue.shift();

    nodes.push(element.val);

    if (element.left) queue.push(element.left);
    if (element.right) queue.push(element.right);

    return this.bfsRecursive(queue, nodes);
  }

  dfsIterative() {
    let element = this.root;
    const nodes = [],
      stack = [];

    while (true) {
      if (element) {
        stack.push(element);
        nodes.push(element.val);

        element = element.left;
      } else if (stack.length) {
        element = stack.pop();

        element = element.right;
      } else break;
    }

    return nodes;
  }

  dfs() {
    // less memory, does path exist <> slower
    const nodes = [];

    function traverse(node) {
      nodes.push(node.val);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return nodes;
  }

  validate(node, min = null, max = null) {
    if (max !== null && node.val > max) return false;

    if (min !== null && node.val < min) return false;

    if (node.left && !this.validate(node.left, min, node.val)) return false;

    if (node.right && !this.validate(node.right, node.val, max)) return false;

    return true;
  }
}

const bst = new BinarySearchTree();

bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(5);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);

// //           9
// //      4       20
// //    1   6   15  170
// //      (5)
// console.log(bst.lookup(9));
// console.log(JSON.stringify(bst, undefined, 2));

// console.log(bst.remove(5));
// console.log(JSON.stringify(bst, undefined, 2));

// console.log(bst.traverse(bst.root));

console.log(bst.bfs());
console.log(bst.bfsRecursive([bst.root], []));
console.log(bst.dfs());
console.log(bst.dfsIterative());

// inorder   -> [1, 4, 6, 9, 15, 20, 170]
// preorder  -> [9, 4, 1, 6, 20, 15, 170]
// postorder -> [1, 6, 4, 15, 170, 20, 9]

bst._invalidate(10);
console.log(bst.validate(bst.root));
