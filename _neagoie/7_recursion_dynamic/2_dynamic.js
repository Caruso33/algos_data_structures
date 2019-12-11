const { performance } = require("perf_hooks");

function fibonaccis(val, useCache) {
  const cache = {};

  function recurse(v) {
    if (v < 2) return v;

    if (cache[v] && useCache) {
      return cache[v];
    } else {
      calculations++;

      cache[v] = recurse(v - 2) + recurse(v - 1);
      return cache[v];
    }
  }
  return recurse(val);
}

function fibonaccisBottomUp(val) {
  const result = [0, 1];

  for (let i = 2; i <= val; i++) {
    calculations++;

    result.push(result[i - 2] + result[i - 1]);
  }
  return result.pop();
}

const val = 40;
let calculations, time1, time2;

calculations = 0;
time1 = performance.now();
console.log(fibonaccis(val, false));
time2 = performance.now();
console.log("no chache: ", time2 - time1, "ms, calcs: ", calculations);

calculations = 0;
time1 = performance.now();
console.log(fibonaccis(val, true));
time2 = performance.now();
console.log("with chache: ", time2 - time1, "ms, calcs: ", calculations);

fibonaccisBottomUp;
calculations = 0;
time1 = performance.now();
console.log(fibonaccisBottomUp(val));
time2 = performance.now();
console.log("bottom up: ", time2 - time1, "ms, calcs: ", calculations);
