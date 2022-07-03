function sumOfTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNum = Number(input[2]);

  let countNextNum = 0;
  let num1 = 0;
  let num2 = 0;

  for (let x1 = start; x1 <= end; x1++) {
    num1 = x1;
    for (let x2 = start; x2 <= end; x2++) {
      num2 = x2;
      countNextNum++;

      if (x1 + x2 === magicNum) {
        console.log(
          `Combination N:${countNextNum} (${x1} + ${x2} = ${magicNum})`
        );
        return;
      }
    }
  }
  if (num1 + num2 !== magicNum) {
    console.log(`${countNextNum} combinations - neither equals ${magicNum}`);
  }
}
sumOfTwoNumbers([`1`, `10`, `5`]);
// expected output: Combination N:4 (1 + 4 = 5)
sumOfTwoNumbers([`88`, `888`, `1000`]);
// expected output: Combination N:20025 (112 + 888 = 1000)
sumOfTwoNumbers([`23`, `24`, `20`]);
// expected output: 4 combinations - neither equals 20
sumOfTwoNumbers([`88`, `888`, `2000`]);
// expected output: 641601 combinations - neither equals 2000
