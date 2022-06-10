function digits(input) {
  let index = 0;
  let text = input[index];

  let first = Number(text[0]);
  let second = Number(text[1]);
  let third = Number(text[2]);
  let result = ``;
  let currentNum = Number(input[index]);

  for (let col = 1; col <= first + second; col++) {
    result = ``;

    for (let row = 1; row <= first + third; row++) {
      if (currentNum % 5 === 0) {
        currentNum -= first;
      } else if (currentNum % 3 === 0) {
        currentNum -= second;
      } else if (currentNum % 5 !== 0 && currentNum % 3 !== 0) {
        currentNum += third;
      }
      result += `${currentNum} `;
    }
    console.log(result);
  }
}
digits([`376`]);
