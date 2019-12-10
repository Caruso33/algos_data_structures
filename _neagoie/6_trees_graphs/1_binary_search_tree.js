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
}

// const bst = new BinarySearchTree();

// bst.insert(9);
// bst.insert(4);
// bst.insert(6);
// bst.insert(5);
// bst.insert(20);
// bst.insert(170);
// bst.insert(15);
// bst.insert(1);

// //           9
// //      4       20
// //    1   6   15  170
// //       5
// console.log(bst.lookup(9));
// console.log(JSON.stringify(bst, undefined, 2));

// console.log(bst.remove(5));
// console.log(JSON.stringify(bst, undefined, 2));

// console.log(bst.traverse(bst.root));
