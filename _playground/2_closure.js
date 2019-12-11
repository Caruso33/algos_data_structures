function outer() {
  let variable = 5;

  setTimeout(() => {
    variable = 10;
  }, 0);

  return function inner() {
    console.log(variable);
  };
}

const out = outer();

out();

setTimeout(() => { // refs change
  out();
}, 1000);
