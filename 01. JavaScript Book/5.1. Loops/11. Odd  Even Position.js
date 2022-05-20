function oddEvenPosition(input) {
  let index = 0;
  let num = Number(input[index]);
  index++;
  let sumEvenNums = 0;
  let sumOddNums = 0;
  let currentNum = 0;
  let maxEvenNum = Number.MIN_SAFE_INTEGER;
  let minEvenNum = Number.MAX_SAFE_INTEGER;
  let maxOddNum = Number.MIN_SAFE_INTEGER;
  let minOddNum = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i <= num; i++) {
    currentNum = Number(input[index]);
    index++;

    if (i % 2 === 0) {
      sumEvenNums += currentNum;
      if (currentNum < minEvenNum) {
        minEvenNum = currentNum;
      }
      if (currentNum > maxEvenNum) {
        maxEvenNum = currentNum;
      }
    } else {
      sumOddNums += currentNum;
      if (currentNum < minOddNum) {
        minOddNum = currentNum;
      }
      if (currentNum > maxOddNum) {
        maxOddNum = currentNum;
      }
    }
  }
  if (sumOddNums === 0) {
    sumOddNums = 0;
    console.log(`OddSum=${sumOddNums}`);
    console.log(`OddMin=No`);
    console.log(`OddMax=No`);
  } else {
    console.log(`OddSum=${sumOddNums}`);
    console.log(`OddMin=${minOddNum}`);
    console.log(`OddMax=${maxOddNum}`);
  }

  if (sumEvenNums === 0) {
    sumEvenNums = 0;
    console.log(`EvenSum=${sumEvenNums}`);
    console.log(`EvenMin=No`);
    console.log(`EvenMax=No`);
  } else {
    console.log(`EvenSum=${sumEvenNums}`);
    console.log(`EvenMin=${minEvenNum}`);
    console.log(`EvenMax=${maxEvenNum}`);
  }
}
oddEvenPosition([`6`, `2`, `3`, `5`, `4`, `2`, `1`]);
oddEvenPosition([`5`, `3`, `-2`, `8`, `11`, `-3`]);
oddEvenPosition([`3`, `-1`, `-2`, `-3`]);
oddEvenPosition([`2`, `1.5`, `-2.5`]);
oddEvenPosition([`1`, `-5`,]);
oddEvenPosition([`1`, `1`,]);
oddEvenPosition([`4`, `-1`, `-2`, `-3`,`-3`]);
