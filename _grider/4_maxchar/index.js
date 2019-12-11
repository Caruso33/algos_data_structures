// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const dict = {};

  for (const s of str) {
    dict[s] = dict[s]++ || 1;
  }

  let max = 0,
    char = "";
  for (const c of Object.keys(dict)) {
    if (dict[c] > max) {
      max = dict[c];
      char = c;
    }
  }
  return char;
}

module.exports = maxChar;
