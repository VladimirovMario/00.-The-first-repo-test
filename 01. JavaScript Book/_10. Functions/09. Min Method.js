function minMethod([num1, num2, num3]) {
  function solve(num1, num2) {
    let min = Math.min(num1, num2);
    return min;
  }

  let result = Math.min(num3, solve(num1, num2));
  console.log(result);
}
minMethod([`1`, `2`, `3`]);

// function minMethod([num1, num2, num3]) {

//     let min = Math.min(num1, num2, num3);

//     console.log(min);
// }
// minMethod([`1`, `2`, `3`]);
// minMethod([`-100`, `-101`, `-102`]);
