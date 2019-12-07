class Arr {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(ind) {
    return this.data[ind];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  delete(ind) {
    const item = this.data[ind];
    this._shiftItems(ind);
    return item;
  }

  _shiftItems(ind) {
    for (let i = ind; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new Arr();
arr.push("hi");
arr.push("world");
arr.push("!");

console.log(arr);

console.log(arr.get(0));
console.log(arr.pop());
console.log(arr.delete(1));

console.log(arr);