function triangleArea(input) {
  let x1 = Number(input[0]);
  let y1 = Number(input[1]);
  let x2 = Number(input[2]);
  let y2 = Number(input[3]);
  let x3 = Number(input[4]);
  let y3 = Number(input[5]);

  let side = Math.abs(x2 - x3);
  let h = Math.abs(y1 - y3);
  let faceTriangle = (side * h) / 2;

  console.log(faceTriangle);
}
triangleArea([`5`, `-2`, `6`, `1`, `1`, `1`]);
triangleArea([`4`, `1`, `-1`, `-3`, `3`, `-3`]);
