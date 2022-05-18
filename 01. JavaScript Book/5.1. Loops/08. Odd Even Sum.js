function oddEvenSum(input) {
  let num = Number(input[0]);

  let oddSum = 0;
  let evenSum = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      evenSum += Number(input[i]);
    } else {
      oddSum += Number(input[i]);
    }
  }
  let result = Math.abs(evenSum - oddSum);

  if (evenSum === oddSum) {
    console.log(`Yes`);
    console.log(`Sum = ${evenSum}`);
  } else {
    console.log(`No`);
    console.log(`Diff = ${result}`);
  }
}
oddEvenSum([`4`, `10`, `50`, `60`, `20`]);
oddEvenSum([`4`, `3`, `5`, `1`, `-2`]);
oddEvenSum([`3`, `5`, `8`, `1`]);
