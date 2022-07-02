function moving(input) {
  let index = 0;
  let width = Number(input[index]);
  index++;
  let length = Number(input[index]);
  index++;
  let height = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let cubicMetersOfRoom = width * length * height;

  while (command !== `Done`) {
    let numOfBoxes = Number(command);
    cubicMetersOfRoom -= numOfBoxes;

    if (cubicMetersOfRoom <= 0) {
      console.log(
        `No more free space! You need ${Math.abs(
          cubicMetersOfRoom
        )} Cubic meters more.`
      );
      break;
    }
    command = input[index];
    index++;
  }
  if (command === `Done`) {
    console.log(`${cubicMetersOfRoom} Cubic meters left.`);
  }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
