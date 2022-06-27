function hotelRoom(input) {
  let month = input[0];
  let countNight = Number(input[1]);
  let price = 0;
  let sum = 0;
  switch (month) {
    case `May`:
    case `October`:
      priceApartment = 65.0;
      priceStudio = 50.0;
      break;
    case `June`:
    case `September`:
      priceApartment = 68.7;
      priceStudio = 75.2;
      break;
    case `July`:
    case `August`:
      priceApartment = 77.0;
      priceStudio = 76.0;
      break;
  }
  if (countNight > 7 && countNight <= 14 && month === `May`) {
    priceStudio = priceStudio * 0.95;
  } else if (countNight > 7 && countNight <= 14 && month === `October`) {
    priceStudio = priceStudio * 0.95;
  } else if ((countNight > 14 && month === `May`) || month === `October`) {
    priceStudio = priceStudio * 0.7;
  } else if ((countNight > 14 && month === `June`) || month === `September`) {
    priceStudio = priceStudio * 0.8;
  }
  if (countNight > 14) {
    priceApartment = priceApartment * 0.9;
  }
  price = countNight * priceApartment;
  sum = countNight * priceStudio;
  console.log(`Apartment: ${price.toFixed(2)} lv.`);
  console.log(`Studio: ${sum.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
