function hasPairWithSum(arr, sum) {
  let low = 0,
    high = arr.length - 1;

  while (low < high) {
    const summed = arr[low] + arr[high];

    if (summed === sum) return true;
    else if (summed > sum) high--;
    else low++;
  }

  return false;
}

function hasPairWithSumImproved(arr, sum) {
  const complements = new Set();

  for (let item of arr) {
    const difference = sum - item;
    if (complements.has(difference)) return true;

    complements.add(difference);
  }

  return false;
}

const funcs = [hasPairWithSum, hasPairWithSumImproved];

for (let func of funcs) {
  console.log(func([1, 2, 3, 9], 8));
  console.log(func([1, 2, 4, 4], 8));
}
