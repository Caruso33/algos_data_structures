// https://algorithms.tutorialhorizon.com/print-all-possible-subsets-with-sum-equal-to-a-given-number/
// https://algorithms.tutorialhorizon.com/print-all-the-subsets-of-a-given-set-power-set/
// https://algorithms.tutorialhorizon.com/print-all-combinations-of-subset-of-size-k-from-given-array/
// https://codereview.stackexchange.com/questions/36214/find-all-subsets-of-an-int-array-whose-sums-equal-a-given-target

// given an array and a sum,
// give back all possibilities of all combinations
// of members inside array which sum up to sum

// examples:
// [2,3], 6
// => [2,2,2], [3,3] ==> 2
// [1,2], 4
// => [1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2] => 5

function printAllSubsetsToSum(array, sum, result) {
  if (array.length === 0) {
    // console.log("solution: ", result);
    return;
  }

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let difference = sum - element;

    if (difference > 0)
      return printAllSubsetsToSum(array.slice(i), difference, result + element);

    if (difference === 0) {
      console.log("solution: ", result + element);
      //   return printAllSubsetsToSum(array, sum, result);
    }
  }
}

printAllSubsetsToSum([2, 3], 6, "");
// console.log(allPossibilities([1, 2], 4));

function test(val) {
  if (val === 0) return val;

  while (val > 0) {
    console.log("val", val);
    return test(val - 1);
  }
}
// console.log(test(3));
