function printingTriangle([input]) {
  function printLine(start = 1, end) {
    let line = ``;
    for (let i = start; i <= end; i++) {
      line += i + ` `;
    }
    console.log(line);
  }

  for (let i = 1; i < input; i++) {
    printLine(1, i);
  }
  printLine(1, Number(input));

  for (let i = input - 1; i > 0; i--) {
    printLine(1, i);
  }

  printLine();
}
printingTriangle([`6`]);
