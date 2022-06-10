function bricks(input) {
  let numOfBricks = Number(input[0]);
  let workers = Number(input[1]);
  let capacity = Number(input[2]);

  let min = Math.ceil(numOfBricks / (workers * capacity));
  console.log(min);
}
bricks([`120`, `2`, `30`]);
bricks([`355`, `3`, `10`]);
bricks([`12`, `5`, `30`]);
