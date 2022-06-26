function newHouse(input) {
  let flowers = input[0];
  let numberOfFlowers = Number(input[1]);
  let budget = Number(input[2]);
  let price = 0;

  switch (flowers) {
    case "Roses":
      price = numberOfFlowers * 5.0;
      if (numberOfFlowers > 80) {
        price = price * 0.9;
      }
      break;
    case "Dahlias":
      price = numberOfFlowers * 3.8;
      if (numberOfFlowers > 90) {
        price = price * 0.85;
      }
      break;
    case "Tulips":
      price = numberOfFlowers * 2.8;
      if (numberOfFlowers > 80) {
        price = price * 0.85;
      }
      break;
    case "Narcissus":
      price = numberOfFlowers * 3.0;
      if (numberOfFlowers < 120) {
        price = price + price * 0.15;
      }
      break;
    case "Gladiolus":
      price = numberOfFlowers * 2.5;
      if (numberOfFlowers < 80) {
        price = price + price * 0.2;
      }
      break;
  } //if (flowers === "Roses" || flowers === "Dahlias" || flowers === "Tulips" || flowers === "Narcissus" || flowers === "Gladiolus" ) {
  if (budget < price) {
    sumNeeded = budget - price;
    console.log(
      `Not enough money, you need ${Math.abs(sumNeeded).toFixed(2)} leva more.`
    );
  } else if ((budget) => price) {
    sumLeft = budget - price;
    console.log(
      `Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${sumLeft.toFixed(
        2
      )} leva left.`
    );
  }
  // }
}
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);
newHouse(["Roses", "55", "250"]);
