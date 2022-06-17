function solve([n]) {
  function signOfIntegerNumber(num) {
    if (num > 0) {
      console.log(`The number ${num} is positive.`);
    } else if (num < 0) {
      console.log(`The number ${num} is negative.`);
    } else if (num === 0) {
      console.log(`The number ${num} is zero.`);
    }
  }

  let num = Number(n);

  signOfIntegerNumber(num);
}
solve([`2`]);
