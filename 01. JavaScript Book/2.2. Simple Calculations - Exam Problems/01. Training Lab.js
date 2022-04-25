function studyHall(input) {
  
  let length = Number(input[0]);
  let width = Number(input[1]);

  let lengthInCentimeters = length * 100;
  let corridor = 100;
  let widthInCentimeters = width * 100 - corridor;
  let rowLenth = 120;
  let rowWidth = 70;
  let seatsTaken = 3;
  let numOfRowsInLength = Math.floor(lengthInCentimeters / rowLenth);
  let numOfRowsInWidth = Math.floor(widthInCentimeters / rowWidth);
  let totalSeats = numOfRowsInLength * numOfRowsInWidth - seatsTaken;

  console.log(totalSeats);
}
studyHall([`8.4`, `5.2`]);
