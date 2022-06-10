function pointOnSegment(input) {
  let x1 = Number(input[0]);
  let y1 = Number(input[1]);
  let point = Number(input[2]);

  let leftPoint = Math.min(x1, y1);
  let rightPoint = Math.max(x1, y1);

  let distanceLeft = Math.abs(leftPoint - point);
  let distanceRight = Math.abs(rightPoint - point);

  let minDistance = Math.min(distanceLeft, distanceRight);

  if (point >= leftPoint && point <= rightPoint) {
    console.log(`in`);
  } else {
    console.log(`out`);
  }
  console.log(minDistance);
}
pointOnSegment([10, 5, 7]);
pointOnSegment([8, 10, 5]);
pointOnSegment([1, -2, 3]);
