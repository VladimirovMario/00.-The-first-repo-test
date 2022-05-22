function smartLilly(input) {
  let age = Number(input[0]);
  let priceWasher = Number(input[1]);
  let priceForToys = Number(input[2]);

  let countToys = 0;
  let moneySavedFromBirthdays = 0;
  let sumSaved = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 !== 0) {
      countToys++;
    } else {
      moneySavedFromBirthdays++;
      sumSaved += moneySavedFromBirthdays * 10;
      sumSaved--;
    }
  }
  let priceSoldToys = countToys * priceForToys;
  let totalMoneySaved = sumSaved + priceSoldToys;
  let diff = Math.abs(totalMoneySaved - priceWasher);

  if (totalMoneySaved >= priceWasher) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}
smartLilly([`10`, `170.00`, `6`]);
smartLilly([`21`, `1570.98`, `3`]);
