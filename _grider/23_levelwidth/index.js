// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth2(root) {
  const queue = [root, "endLevel"],
    result = [];
  let widthCounter = 0;

  while (queue.length) {
    const element = queue.shift();

    if (element === "endLevel") {
      result.push(widthCounter);
      widthCounter = 0;
      queue.push("endLevel");
    } else {
      element.children.forEach(child => {
        widthCounter++;
        queue.push(child);
      });
    }
  }

  return result;
}

function levelWidth(root) {
  const arr = [root, "s"];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "s") {
      counters.push(0);
      arr.push("s");
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
