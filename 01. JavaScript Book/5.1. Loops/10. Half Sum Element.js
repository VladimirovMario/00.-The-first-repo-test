function halfSumElement(input) {
  let index = 0;
  let num = Number(input[index]);
  index++;

  let currentNum = 0;
  let sum = 0;
  let maxNum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < num; i++) {
    currentNum = Number(input[index]);
    index++;
    sum += currentNum;

    if (currentNum > maxNum) {
      maxNum = currentNum;
    }
  }
  let diff = Math.abs(maxNum - sum);

  if (diff === maxNum) {
    console.log(`Yes`);
    console.log(`Sum = ${maxNum}`);
  } else {
    let diff = Math.abs(maxNum - (sum - maxNum));
    console.log(`No`);
    console.log(`Diff = ${diff}`);
  }
}
halfSumElement([`7`, `3`, `4`, `1`, `1`, `2`, `12`, `1`]);
halfSumElement([`3`, `10`, `1`, `1`]);
halfSumElement([`3`, `1`, `1`, `1`]);
halfSumElement([`4`, `6`, `1`, `2`, `3`]);
