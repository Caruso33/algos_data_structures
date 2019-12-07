// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

function containsCommonItem(array1, array2) {
  for (let item1 of array1) {
    // if (array2.includes(item1)) return true;
    for (let item2 of array2) {
      if (item1 === item2) return true;
    }
  }
  return false;
} // O(n^2) // O(1) space

function containsCommonItemImproved(array1, array2) {
  const seen = {};

  for (let item1 of array1) {
    seen[item1] = true;
  }

  for (let item2 of array2) {
    if (seen[item2]) return true;
  }
  return false;
} // O(n+m) !! // 

function containsCommonItemJS(array1, array2) {
  return array1.some(item1 => array2.includes(item1));
} // O(n+m) !! // O(n) space

//
//
//
const funcs = [
  containsCommonItem,
  containsCommonItemImproved,
  containsCommonItemJS
];

for (let func of funcs) {
  console.log(func(["a", "b", "c", "x"], ["z", "y", "i"]));
  console.log(func(["a", "b", "c", "x"], ["z", "y", "x"]));
}
