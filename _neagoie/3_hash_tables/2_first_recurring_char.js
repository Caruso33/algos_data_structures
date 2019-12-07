function firstRecurringCharNaive(arr) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      const comparable = arr[j];
      if (item === comparable) return item;
    }
  }

  return null;
} // O(n^2)

function firstRecurringCharNaiveCorrectOrder(arr) {
  let candidate = null,
    index = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      const comparable = arr[j];

      if (item === comparable && i < index) {
        candidate = item;
        index = i;
      }
    }
  }

  return candidate;
} // O(n^2)

function firstRecurringCharImproved(arr) {
  const seen = {};

  for (const item of arr) {
    if (seen[item]) return item;

    seen[item] = true;
  }

  return null;
} // O(n), but O(n) Space complexity

const arrays = [
  [2, 5, 1, 2, 3, 5, 1, 2, 4],
  [1, 2, 3],
  [2, 5, 5, 2] // should return 5!
];

const funcs = [
  firstRecurringCharNaive,
  firstRecurringCharNaiveCorrectOrder,
  firstRecurringCharImproved
];

for (const func of funcs) {
  for (const array of arrays) {
    console.log(func(array));
  }
}
