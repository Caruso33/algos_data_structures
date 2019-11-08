function binarySearch(arr, ele) {
  let start = 0,
    end = arr.length - 1,
    middle = Math.floor((start + end) / 2);

  while (arr[middle] !== ele && start <= end) {
    if (arr[middle] > ele) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === ele ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 29));
