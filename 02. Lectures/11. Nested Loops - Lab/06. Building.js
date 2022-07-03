function building(input) {
  let numOfFloors = Number(input[0]);
  let numOfRooms = Number(input[1]);
  let startingLetter = ``;
  let result = ``;

  for (let floors = numOfFloors; floors > 0; floors--) {
    result = ``;
    for (let rooms = 0; rooms < numOfRooms; rooms++) {
      if (floors === numOfFloors) {
        startingLetter = `L`;
      } else if (floors % 2 !== 0) {
        startingLetter = `A`;
      } else if (floors % 2 === 0) {
        startingLetter = `O`;
      }
      result += `${startingLetter}${floors}${rooms} `;
    }
    console.log(result);
  }
}
building(["9", "5"]);
