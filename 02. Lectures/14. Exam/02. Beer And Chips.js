function beerAndChips(input) {
  let name = input[0];
  let budget = Number(input[1]);
  let numOfBeer = Number(input[2]);
  let chips = Number(input[3]);

  let priceForBeer = numOfBeer * 1.2;
  let priceForOneChips = (priceForBeer * 45) / 100;
  let totalPriceChips = Math.ceil(priceForOneChips * chips);
  let totalPrice = priceForBeer + totalPriceChips;
  let diff = Math.abs(totalPrice - budget);

  if (totalPrice <= budget) {
    console.log(`${name} bought a snack and has ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`${name} needs ${diff.toFixed(2)} more leva!`);
  }
}
beerAndChips(["Valentin", "5", "2", "4"]);
