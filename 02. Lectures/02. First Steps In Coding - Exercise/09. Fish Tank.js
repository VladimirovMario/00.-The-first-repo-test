function fishTank(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let hight = Number(input[2]);
  let percent = Number(input[3]);
  let tank = length * width * hight;
  let liters = tank * 0.001;
  let occupiedSpace = percent / 100;
  let neededLiters = liters * (1 - occupiedSpace);

  console.log(neededLiters);
}
fishTank(["105", "77", "89", "18.5"]);
