class HashTable {
  constructor(size = 53) {
    // 13, 17, etc.
    // size should be prime number
    this.keyMap = new Array(size);
  }

  set(key, value) {
    const hashed = this._hash(key);
    if (this.keyMap[hashed]) this.keyMap[hashed].push([key, value]);
    else this.keyMap[hashed] = [[key, value]];
  }

  get(key) {
    const hashed = this._hash(key);

    if (this.keyMap[hashed]) {
      for (let i = 0; i < this.keyMap[hashed].length; i++) {
        if (this.keyMap[hashed][i][0] === key) return this.keyMap[hashed][i];
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][0]))
            keys.push(this.keyMap[i][j][0]);
        }
      }
    }

    return keys;
  }

  values() {
    const values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1]))
            values.push(this.keyMap[i][j][1]);
        }
      }
    }

    return values;
  }

  _hash(key) {
    let total = 0;
    let PRIME = 31; // mitigating collisions, spreading values more uniformly

    // need constant hash time
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // map 'a' to 1, 'b' to 2, etc.
      let value = key[i].charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length; // length buckets
    }
    return total;
  }

  print() {
    console.log(this.keyMap);
  }
}

const hashTable = new HashTable(13);
// console.log(hashTable._hash("pink!", 20));

hashTable.set("hello", "world");
hashTable.set("world", 123);
hashTable.set("goodbye", "day");

console.log(hashTable.get("world"));

console.log(hashTable.keys());
console.log(hashTable.values());

hashTable.print();
