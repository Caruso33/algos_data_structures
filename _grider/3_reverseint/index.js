// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let str = n.toString();

  if (n < 0) str = str.slice(1);

  str = str
    .split("")
    .reverse()
    .join("");

  let reversed = parseInt(str);
  if (n < 0) reversed *= -1;

  return reversed;
}

module.exports = reverseInt;
