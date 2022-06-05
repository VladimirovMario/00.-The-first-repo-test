function fibonacci(input) {
  let num = Number(input[0]);
  let f0 = 1;
  let f1 = 1;

  for (let i = 0; i < num - 1; i++) {
    let fNext = f0 + f1;
    f0 = f1;
    f1 = fNext;
  }
  console.log(f1);
}
fibonacci([`10`]);
fibonacci([`5`]);
fibonacci([`20`]);
fibonacci([`0`]);
fibonacci([`1`]);
