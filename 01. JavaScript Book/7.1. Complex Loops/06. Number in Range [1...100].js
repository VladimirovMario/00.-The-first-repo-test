function numberInRange1to100(input) {
  let index = 0;
  let num = Number(input[index]);

  while (num < 1 || num > 100) {
    console.log(`Invalid number!`);
    index++;
    num = Number(input[index]);
  }
  console.log(`The number is: ${num}`);
}
numberInRange1to100([`101`, `99`, `101`, `50`]);
