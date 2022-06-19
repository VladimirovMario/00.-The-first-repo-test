function foodDelivery(input) {
  let chicken = Number(input[0]) * 10.35;
  let fish = Number(input[1]) * 12.4;
  let vegan = Number(input[2] * 8.15);
  let delivery = Number(2.5);
  let desert = (chicken + fish + vegan) * Number(0.2);
  let sum = chicken + fish + vegan + delivery + desert;
  console.log(sum);
}
foodDelivery(["9", "2", "6"]);
