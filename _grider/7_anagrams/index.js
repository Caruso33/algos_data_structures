// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  function cleanString(s) {
    return s
      .trim()
      .toLowerCase()
      .replace(/[^a-z]/g, "");
  }

  let cleanedA = cleanString(stringA).split(""),
    cleanedB = cleanString(stringB).split("");

  let dict = {};
  for (const char of cleanedA) {
    dict[char] = dict[char] + 1 || 1;
  }

  for (const char of cleanedB) {
    if (dict[char] && dict[char] > 0) dict[char] -= 1;
    else return false;
  }

  for (const char of Object.keys(dict)) {
    if (dict[char] !== 0) return false;
  }

  return true;
}

module.exports = anagrams;
