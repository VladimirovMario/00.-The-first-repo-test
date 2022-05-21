function equalPairs(input) {
  let index = 0;
  let num = Number(input[index]);
  index++;
  let firstNum = Number(input[index]);
  index++;
  let secondNum = Number(input[index]);
  index++;

  let firstTotal = firstNum + secondNum;
  let maxDiff = Number.MIN_SAFE_INTEGER;

  for (let i = 3; i <= 2 * num; i += 2) {
    firstNum = Number(input[index]);
    index++;
    secondNum = Number(input[index]);
    index++;

    let currentTotal = firstNum + secondNum;
    let currentDiff = Math.abs(currentTotal - firstTotal);

    if (maxDiff < currentDiff) {
      maxDiff = currentDiff;
    }
    firstTotal = currentTotal;
  }
  if (num === 1) {
    if (firstTotal / 2 === firstNum) {
      console.log(`Yes, value=${firstTotal}`);
    }
  } else if (maxDiff === 0) {
    console.log(`Yes, value=${firstTotal}`);
  } else {
    console.log(`No, maxdiff=${maxDiff}`);
  }
}
equalPairs([`2`, `-1`, `2`, `0`, `-1`]);
equalPairs([`1`, `5`, `5`]);
equalPairs([`3`, `1`, `2`, `0`, `3`, `4`, `-1`]);
equalPairs([`2`, `1`, `2`, `2`, `2`]);
equalPairs([`4`, `1`, `2`, `0`, `3`, `4`, `-1`, `2`, `3`]);
