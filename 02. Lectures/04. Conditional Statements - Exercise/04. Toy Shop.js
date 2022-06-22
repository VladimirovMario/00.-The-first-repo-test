function toyShop(input) {
  let priceExcursion = Number(input[0]);
  let puzzle = Number(input[1]);
  let dols = Number(input[2]);
  let bears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  let sum = puzzle * 2.6 + dols * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;
  let numberOfToys = puzzle + dols + bears + minions + trucks;
  let rent = sum * 0.1;
  let totalSum = sum - rent;

  if (numberOfToys >= 50) {
    discount = sum * 0.25;
    rent = (sum - discount) * 0.1;
    totalSum = sum - discount - rent;
  }

  let moneyLeft = Math.abs(totalSum - priceExcursion).toFixed(2);

  if (totalSum >= priceExcursion) {
    console.log(`Yes! ${moneyLeft} lv left.`);
  } else if (totalSum < priceExcursion) {
    console.log(`Not enough money! ${moneyLeft} lv needed.`);
  }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
