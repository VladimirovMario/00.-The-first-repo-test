function transportPrice(input) {
  let kilometers = Number(input[0]);
  let dayOrNight = input[1];
  let price = 0;
  let taxiRate = 0;

  if (dayOrNight === `day`) {
    taxiRate = 0.79;
  } else {
    taxiRate = 0.9;
  }
  if (kilometers < 20) {
    price = 0.7 + taxiRate * kilometers;
  } else if (kilometers < 100) {
    price = 0.09 * kilometers;
  } else {
    price = 0.06 * kilometers;
  }
  console.log(price.toFixed(2));
}
transportPrice([`5`, `day`]);
transportPrice([`7`, `night`]);
transportPrice([`25`, `day`]);
transportPrice([`180`, `night`]);
