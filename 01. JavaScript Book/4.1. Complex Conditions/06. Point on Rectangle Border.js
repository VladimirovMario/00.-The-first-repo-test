function pointOnRectangleBorder(input) {
  let x1 = Number(input[0]);
  let y1 = Number(input[1]);
  let x2 = Number(input[2]);
  let y2 = Number(input[3]);
  let x = Number(input[4]);
  let y = Number(input[5]);

  let onLeftSide = x === x1 && y >= y1 && y <= y2;
  let onRightSide = x === x2 && y >= y1 && y <= y2;
  let onLowerSide = y === y1 && x >= x1 && x <= x2;
  let onUpperSide = y === y2 && x >= x1 && x <= x2;

  if (onLeftSide || onRightSide) {
    console.log(`Border`);
  } else if (onLowerSide || onUpperSide) {
    console.log(`Border`);
  } else {
    console.log(`Inside / Outside`);
  }
}
pointOnRectangleBorder([`2`, `-3`, `12`, `3`, `12`, `-1`]);
pointOnRectangleBorder([`2`, `-3`, `12`, `3`, `8`, `-1`]);
