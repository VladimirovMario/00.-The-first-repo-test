function pointInTheFigure(input) {
  let h = Number(input[0]);
  let x = Number(input[1]);
  let y = Number(input[2]);

  let outRectangle1 = x < 0 || x > 3 * h || y < 0 || y > h;
  let outRectangle2 = x < h || x > 2 * h || y < h || y > 4 * h;

  let inRectangle1 = x > 0 && x < 3 * h && y > 0 && y < h;
  let inRectangle2 = x > h && x < 2 * h && y >= h && y < 4 * h;

  let commonBorder = x > h && x < 2 * h && y === h;

  if (outRectangle1 && outRectangle2) {
    console.log(`outside`);
  } else if (inRectangle1 || inRectangle2 || commonBorder) {
    console.log(`inside`);
  } else {
    console.log(`border`);
  }
}
pointInTheFigure([`2`, `3`, `10`]);
//  expected output: outside
pointInTheFigure([`2`, `3`, `1`]);
// expected output: inside
pointInTheFigure([`2`, `2`, `2`]);
//  expected output: border
pointInTheFigure([`2`, `6`, `0`]);
//  expected output: border
pointInTheFigure([`2`, `0`, `6`]);
//  expected output: outside
pointInTheFigure([`15`, `13`, `55`]);
// expected output: outside
pointInTheFigure([`15`, `29`, `37`]);
// expected output: inside
pointInTheFigure([`15`, `37`, `18`]);
// expected output: outside
pointInTheFigure([`15`, `-4`, `7`]);
// expected output: outside
pointInTheFigure([`15`, `30`, `0`]);
//  expected output: border

