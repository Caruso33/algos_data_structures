class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    let valIndex = this.values.length - 1;
    let parentIndex = Math.floor((valIndex - 1) / 2);

    while (val >= this.values[parentIndex]) {
      if (val === this.values[parentIndex]) return undefined;

      this.values[valIndex] = this.values[parentIndex];
      this.values[parentIndex] = val;

      valIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
    return this;
  }

  extractMax() {
    const root = this.values[0];
    const newRoot = this.values.pop();
    const length = this.values.length;

    if (length === 0) return root;
    this.values[0] = newRoot;

    let valIndex = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;

    let leftChild = length > 1 ? this.values[leftChildIndex] : null;
    let rightChild = length > 2 ? this.values[rightChildIndex] : null;

    while (newRoot < leftChild || newRoot < rightChild) {
      if (leftChild > rightChild) {
        this.values[valIndex] = leftChild;
        this.values[leftChildIndex] = newRoot;

        valIndex = leftChildIndex;
      } else {
        this.values[valIndex] = rightChild;
        this.values[rightChildIndex] = newRoot;

        valIndex = rightChildIndex;
      }

      leftChildIndex = valIndex * 2 + 1;
      leftChild = this.values[leftChildIndex];

      rightChildIndex = valIndex * 2 + 2;
      rightChild = this.values[rightChildIndex];
    }

    return root;
  }

  print() {
    console.log(this.values);
  }
}

// const heap = new MaxBinaryHeap();

// heap.insert(41); //                 55
// heap.insert(39); //           39          41
// heap.insert(33); //        18    27    12    33
// heap.insert(18); //
// heap.insert(27); //                 41
// heap.insert(12); //           39          33
// heap.insert(55); //        18    27     12

// heap.print(); //                     39
// console.log(heap.extractMax()); //27     33
// heap.print(); //               18   12

// console.log(heap.extractMax());
// heap.print();
// console.log(heap.extractMax());
// heap.print();
// console.log(heap.extractMax());
// heap.print();
// console.log(heap.extractMax());
// heap.print();
// console.log(heap.extractMax());
// heap.print();
// console.log(heap.extractMax());

// heap.print();
