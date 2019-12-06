class Node {
  constructor(val) {
    this.value = val;
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
    if (!this.root) {
      this.root = node;
      return this;
    }

    let iter = this.root;

    while (iter) {
      if (val === iter.value) return undefined;

      if (val < iter.value) {
        if (!iter.left) {
          iter.left = node;
          return this;
        }

        iter = iter.left;
      } else {
        if (!iter.right) {
          iter.right = node;
          return this;
        }

        iter = iter.right;
      }
    }
  }

  find(val) {
    let iter = this.root;

    while (iter) {
      if (val === iter.value) return iter;

      if (val < iter.value) {
        iter = iter.left;
      } else {
        iter = iter.right;
      }
    }
    return undefined;
  }

  contains(val) {
    let iter = this.root;

    while (iter) {
      if (val === iter.value) return true;

      if (val < iter.value) {
        iter = iter.left;
      } else {
        iter = iter.right;
      }
    }
    return false;
  }

  bfs() {
    const data = [];
    const queue = [this.root];
    let current;

    while (queue.length) {
      current = queue.shift();
      data.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return data;
  }

  dfsPreOrder() {
    const data = [];

    function traverse(node) {
      data.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  dfsPostOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.value);
    }

    traverse(this.root);

    return data;
  }

  dfsInOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);

      data.push(node.value);

      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  print() {
    // const nodes = [this.root];
    // let index = 0;
    // while (index < nodes.length) {
    //   const current = nodes[index];
    //   if (current.left) nodes.push(current.left);
    //   if (current.right) nodes.push(current.right);
    //   index++;
    // }
    console.log(bst.bfs());
  }
}

const bst = new BinarySearchTree();

bst.insert(10); //            10
bst.insert(6); //          6      15
bst.insert(15); //       3   8        20
bst.insert(3); //
bst.insert(8); //
bst.insert(20); //

// console.log(bst.find(3));

// console.log(bst.bfs());
// console.log(bst.dfsPreOrder());
// console.log(bst.dfsPostOrder());
// console.log(bst.dfsInOrder());

// bst.print();
