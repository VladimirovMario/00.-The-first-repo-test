function sumsStep3(input) {
  let num = Number(input[0]);

  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;

  for (let i = 1; i <= num; i++) {
    let currentNum = Number(input[i]);
    if (i % 3 === 1) {
      sum1 += currentNum;
    }
    if (i % 3 === 2) {
      sum2 += currentNum;
    }
    if (i % 3 === 0) {
      sum3 += currentNum;
    }
  }
  console.log(`sum1 = ${sum1}`);
  console.log(`sum2 = ${sum2}`);
  console.log(`sum3 = ${sum3}`);
}
sumsStep3([`2`, `3`, `5`]);
console.log(`---`);
sumsStep3([`5`, `3`, `5`, `2`, `7`, `8`]);
console.log(`---`);
sumsStep3([`4`, `7`, `-2`, `6`, `12`]);
