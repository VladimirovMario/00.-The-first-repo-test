function vegetableMarket(input) {
  let priceVegetables = Number(input[0]);
  let priceFruits = Number(input[1]);
  let kilogramsVeg = Number(input[2]);
  let kilogramsFru = Number(input[3]);

  let EUR = 1.94;
  let sumVeg = priceVegetables * kilogramsVeg;
  let sumFru = priceFruits * kilogramsFru;
  let totalSum = (sumVeg + sumFru) / EUR;

  console.log(totalSum);
}
vegetableMarket([`1.5`, `2.5`, `10`, `10`]);
