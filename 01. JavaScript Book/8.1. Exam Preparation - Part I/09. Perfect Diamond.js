function perfectDiamond(input) {
  let num = Number(input[0]);

  let outerSide = num - 1;
  for (let top = 0; top < num; top++) {
    console.log(` `.repeat(outerSide) + `*` + `-*`.repeat(top));
    outerSide--;
  }
  outerSide++;
  for (let down = num - 2; down >= 0; down--) {
    outerSide++;
    console.log(` `.repeat(outerSide) + `*` + `-*`.repeat(down));
  }
}
perfectDiamond([`5`]);
