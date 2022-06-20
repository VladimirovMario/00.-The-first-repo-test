function basketballEquipment(input) {
  let basketballFee = Number(input[0]);
  let sneakers = basketballFee - basketballFee * 0.4;
  let equipment = sneakers - sneakers * 0.2;
  let ball = equipment * 0.25;
  let acc = ball * 0.2;
  let total = basketballFee + sneakers + equipment + ball + acc;

  console.log(total);
}
basketballEquipment(["550"]);
