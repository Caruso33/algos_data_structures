function factorials(val) {
  if (val === 1) return 1;

  return val * factorials(val - 1);
}

function factorial(val) {
  let fac = 1;
  while (val > 0) {
    fac *= val;
    val--;
  }
  return fac;
}

console.log(factorials(5));
console.log(factorial(5), "\n");
//
//
//
function fibonaccis(val) {
  if (val === 0) return 0;
  if (val === 1) return 1;

  return fibonaccis(val - 2) + fibonaccis(val - 1);
}

function fibonacci(val) {
  let result = 2,
    last2 = 1,
    last1 = 1;

  if (val === 0) return 0;
  if (val === 1) return 1;

  for (let i = 3; i < val; i++) {
    last2 = last1;
    last1 = result;

    result = last2 + last1;
  }

  return result;
}

console.log(fibonaccis(5));
console.log(fibonacci(5), "\n");
