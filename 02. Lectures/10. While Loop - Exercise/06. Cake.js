function cake(input) {
  let index = 0;
  let length = Number(input[index]);
  index++;
  let width = Number(input[index]);
  index++;
  let cake = length * width;

  let command = input[index];
  index++;

  while (command !== "STOP") {
    let takenPieces = Number(command);
    cake -= takenPieces;

    if (cake < 0) {
      console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
      break;
    }
    command = input[index];
    index++;
  }

  if (command === "STOP") {
    console.log(`${Math.abs(cake)} pieces are left.`);
  }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);
