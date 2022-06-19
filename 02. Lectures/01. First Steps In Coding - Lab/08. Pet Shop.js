function petShop(input) {
  let foodDogs = Number(input[0]);
  let foodCats = Number(input[1]);
  let priceDogsFood = 2.5;
  let priceCatsFood = 4;
  let totalPrice = foodCats * priceCatsFood + foodDogs * priceDogsFood;

  console.log(`${totalPrice}`);
}
petShop(["13", "9"]);
