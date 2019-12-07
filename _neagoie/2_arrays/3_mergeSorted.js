function mergeSortedArrays(arr1, arr2) {
  const result = arr2.slice();

  let pointer = 0;
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];

    while (element > result[pointer]) {
      pointer++;
    }
    result.splice(pointer, 0, element);
  }

  return result;
}

function mergeSortedArrays2(arr1, arr2) {
  const result = [...arr1, ...arr2];

  return result.sort((a, b) => a - b);
}

function mergeSortedArrays3(arr1, arr2) {
  const result = [];

  let arr1Pointer = 0,
    arr2Pointer = 0;
  arr1Item = arr1[arr1Pointer];
  arr2Item = arr2[arr2Pointer];

  if (arr1Item.length === 0) return arr2;
  if (arr2Item.length === 0) return arr1;

  while (arr2Item || arr2Item) {
    arr1Item = arr1[arr1Pointer];
    arr2Item = arr2[arr2Pointer];

    if (!arr2Item || arr1Item < arr2Item) {
      result.push(arr1Item);
      arr1Pointer++;
    } else {
      result.push(arr2Item);
      arr2Pointer++;
    }
  }

  return result;
}

const funcs = [mergeSortedArrays, mergeSortedArrays2, mergeSortedArrays3];
const arr1 = [0, 3, 4, 31],
  arr2 = [4, 6, 30];

for (const func of funcs) {
  console.log(func(arr1, arr2));
}
