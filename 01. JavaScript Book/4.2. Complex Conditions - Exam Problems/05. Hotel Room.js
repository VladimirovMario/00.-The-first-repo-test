function hotelRoom(input) {
  let month = input[0];
  let daysOfStay = Number(input[1]);

  let priceForStudio = 0;
  let priceForApartment = 0;

  switch (month) {
    case `May`:
    case `October`:
      priceForStudio = 50.0;
      priceForApartment = 65.0;
      break;
    case `June`:
    case `September`:
      priceForStudio = 75.2;
      priceForApartment = 68.7;
      break;
    case `July`:
    case `August`:
      priceForStudio = 76.0;
      priceForApartment = 77.0;
      break;
  }
  if (daysOfStay > 7 && daysOfStay < 14 && month === `May`) {
    priceForStudio *= 0.95;
  } else if (daysOfStay > 7 && daysOfStay < 14 && month === `October`) {
    priceForStudio *= 0.95;
  } else if ((daysOfStay > 14 && month === `May`) || month === `October`) {
    priceForStudio *= 0.7;
  } else if ((daysOfStay > 14 && month === `June`) || month === `September`) {
    priceForStudio *= 0.8;
  }
  if (daysOfStay > 14) {
    priceForApartment *= 0.9;
  }
  let priceForStayApartment = priceForApartment * daysOfStay;
  let priceForStayStudio = priceForStudio * daysOfStay;

  console.log(`Apartment: ${priceForStayApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${priceForStayStudio.toFixed(2)} lv.`);
}
hotelRoom([`June`, `14`]);
hotelRoom([`May`, `15`]);
hotelRoom([`August`, `20`]);
