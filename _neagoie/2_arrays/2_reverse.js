function reverse(str) {
  // using reverse method, fancy way of splitting it
  return [...str].reverse().join("");
}

function reverse2(str) {
  // forwards, unshifting
  let backwards = [];

  for (const s of str) {
    backwards = [s, ...backwards];
  }

  return backwards.join("");
}

function reverse3(str) {
  // backwards iterating
  let backwards = [];

  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

function reverseImproved(str) {
  // swapping
  // check input
  if (!str || typeof str !== "string" || str.length < 2) return str;

  let low = 0,
    high = str.length - 1;

  const arr = str.split("");

  while (low <= Math.floor(arr.length / 2)) {
    [arr[low], arr[high]] = [arr[high], arr[low]];

    low++;
    high--;
  }

  return arr.join("");
}

const funcs = [reverse, reverse2, reverse3, reverseImproved];
const strings = ["abcde", "1345"];

for (const func of funcs) {
  for (let str of strings) {
    console.log(func(str));
  }
}
