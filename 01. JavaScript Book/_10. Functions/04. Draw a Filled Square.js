function drawAFilledSquare(input) {
  //page 385

  function printHeaderFooter(num) {
    console.log(`-`.repeat(num * 2));
  }

  function printMiddleRow(num) {
    let line = `-`;

    for (let i = 0; i < num - 1; i++) {
      line += `\\/`;
    }
    line += `-`;
    console.log(line);
  }
  let num = Number(input);

  printHeaderFooter(num);
  for (let i = 0; i < num - 2; i++) {
    printMiddleRow(num);
  }
  printHeaderFooter(num);
}
drawAFilledSquare([`6`]);
