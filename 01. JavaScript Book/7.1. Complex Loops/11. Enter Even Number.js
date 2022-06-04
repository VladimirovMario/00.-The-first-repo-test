function enterEvenNumber(input) {
  let index = 0;
  let num = 0;

  while (true) {
    num = Number(input[index]);

    if (num % 2 === 0) {
      break;
    }
    console.log(`The number is not even.`);
    index++;
  }
  console.log(`Even number entered: ${num}`);
}
enterEvenNumber([`11`, `20`, `15`, `6`]);
