function maxNumber(input) {
  let num = Number(input[0]);
  let maxNum = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i <= num; i++) {
    let currentNum = Number(input[i]);

    if (currentNum > maxNum) {
      maxNum = currentNum;
    }
  }
  console.log(maxNum);
}
maxNumber([`2`, `100`, `99`]);
