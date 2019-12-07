class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    const bucket = this._hash(key);

    this.data[bucket]
      ? this.data[bucket].push([key, value])
      : (this.data[bucket] = [[key, value]]);

    return this.data;
  }

  get(key) {
    const bucket = this._hash(key);

    return this.data[bucket] && this.data[bucket].find(b => b[0] === key)[1];
  }

  keys() {
    const keys = [];

    this.data.forEach(bucket => {
      if (bucket) bucket.forEach(b => keys.push(b[0]));
    });
    
    return keys
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;

    // return key // Java implementation
    //   .split("")
    //   .reduce(
    //     (prevHash, currVal) =>
    //       ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
    //     0
    //   );
  }
}
const table = new HashTable(50);
console.log(table);

console.log("hash grapes: ", table._hash("grapes"));
console.log("hash grape: ", table._hash("grape"));

table.set("grapes", 50);
table.set("apples", 70);
table.set("oranges", 150);
console.log("grapes: ", table.get("grapes"));

console.log(table.keys());

// console.log(table);
