// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split('').reverse().join('')

  const res = new Array(str.length);
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    const tmp = str[i];
    res[i] = str[str.length - 1 - i];
    res[str.length - 1 - i] = tmp;
  }
  return res.join("");
}

module.exports = reverse;
