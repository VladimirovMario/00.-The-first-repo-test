function fishingBoat(input) {
  let budgetOfGroup = Number(input[0]);
  let season = input[1];
  let countFishermen = Number(input[2]);
  let price = 0;

  switch (season) {
    case "Spring":
      price = 3000;
      break;
    case "Summer":
    case "Autumn":
      price = 4200;
      break;
    case "Winter":
      price = 2600;
      break;
  }
  if (countFishermen <= 6) {
    price = price * 0.9;
  } else if (countFishermen >= 7 && countFishermen <= 11) {
    price = price * 0.85;
  } else {
    price = price * 0.75;
  }
  if (countFishermen % 2 === 0 && season !== "Autumn") {
    price = price * 0.95;
  }

  let money = Math.abs(budgetOfGroup - price);

  if (budgetOfGroup >= price) {
    console.log(`Yes! You have ${money.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${money.toFixed(2)} leva.`);
  }
}
fishingBoat(["2000", "Winter", "13"]);
fishingBoat(["3600", "Autumn", "6"]);
