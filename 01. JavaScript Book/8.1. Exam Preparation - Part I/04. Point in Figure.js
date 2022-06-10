function pointInFigure(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);

  let ifPointIsIn1 = x >= 2 && x <= 12 && y >= -3 && y <= 1;
  let ifPointIsIn2 = x >= 4 && x <= 10 && y >= -5 && y <= 3;

  if (ifPointIsIn1 || ifPointIsIn2) {
    console.log(`in`);
  } else {
    console.log(`out`);
  }
}
pointInFigure([`8`, `-5`]);
pointInFigure([`6`, `-3`]);
pointInFigure([`11`, `-5`]);
pointInFigure([`11`, `2`]);
