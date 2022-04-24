function radiansToDegrees(input) {
  let rad = parseFloat(input[0]);

  let deg = (rad * 180) / Math.PI;
  console.log(Math.round(deg));
}
radiansToDegrees([`3.1416`]);
radiansToDegrees([`6.2832`]);
radiansToDegrees([`0.7854`]);
radiansToDegrees([`0.5236`]);
