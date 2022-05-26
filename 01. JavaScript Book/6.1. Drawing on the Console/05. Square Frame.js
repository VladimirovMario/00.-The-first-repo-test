function squareFrame(input) {
  let num = Number(input[0]);

  let topRow = `+`;
  for (let top = 1; top <= num - 2; top++) {
    topRow += ` -`;
  }
  topRow += ` +`;
  console.log(topRow);

  for (let middle = 1; middle <= num - 2; middle++) {
    let middleRow = `|`;

    for (let j = 1; j <= num - 2; j++) {
      middleRow += ` -`;
    }
    middleRow += ` |`;
    console.log(middleRow);
  }

  let bottomRow = `+`;
  for (let bottom = 1; bottom <= num - 2; bottom++) {
    bottomRow += ` -`;
  }
  bottomRow += ` +`;
  console.log(bottomRow);
}
squareFrame([`9`]);


