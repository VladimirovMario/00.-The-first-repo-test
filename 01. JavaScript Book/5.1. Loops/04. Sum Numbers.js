function sumNumbers(input) {
  let num = Number(input[0]);
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += Number(input[i]);
  }
  console.log(sum);
}
sumNumbers([`2`,`10`,`20`]);
sumNumbers([`3`,`-10`,`-20`,`-30`]);
sumNumbers([`4`, `45`, `-20`, `7`, `11`]);
