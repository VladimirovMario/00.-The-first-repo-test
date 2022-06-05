function numberPyramid(input) {
  let num = Number(input[0]);
  let currentNum = 1;
  let result = ``;

  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= row; col++) {
      if (col > 1) {
        result += ` `;
      }
      result += currentNum;
      currentNum++;
      if (currentNum > num) {
        break;
      }
    }
    console.log(result);
    result = ``;

    if (currentNum > num) {
      break;
    }
  }
}
numberPyramid([`7`]);
