function touristShop(input) {
  let index = 0;
  let budget = Number(input[index++]);
  let command = input[index++];

  let countProduct = 0;
  let sum = 0;
  while (command !== `Stop`) {
    let productPrice = Number(input[index++]);

    countProduct++;

    if (countProduct % 3 === 0) {
      productPrice *= 0.5;
    }
    budget -= productPrice;
    sum += productPrice;

    if (budget < 0) {
      console.log(`You don't have enough money!`);
      console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
      break;
    }

    command = input[index++];
  }

  if (command === `Stop`) {
    console.log(
      `You bought ${countProduct} products for ${sum.toFixed(2)} leva.`
    );
  }
}
touristShop([
  `153.20`,
  `Backpack`,
  `25.20`,
  `Shoes`,
  `54`,
  `Sunglasses`,
  `30`,
  `Stop`,
]);
console.log(`---`);
touristShop([`54`, `Thermal underwear`, `24`, `Sunscreen`, `45`]);
