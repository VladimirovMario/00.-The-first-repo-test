function minNumber(input) {
  let num = Number(input[0]);
  let minNum = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= num; i++) {
    let currentNum = Number(input[i]);

    if (currentNum < minNum) {
      minNum = currentNum;
    }
  }
  console.log(minNum);
}
minNumber([`3`, `-10`, `20`, `-30`]);
minNumber([`4`, `45`, `-20`, `7`, `99`]);
minNumber([`2`, `13`, `20`]);
