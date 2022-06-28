function skiTrip(input) {
  let days = Number(input[0]);
  let room = input[1];
  let grate = input[2];
  let overnight = days - 1;
  let price = 0;

  switch (room) {
    case "room for one person":
      price = overnight * 18.0;
      break;
    case "apartment":
      price = overnight * 25.0;
      if (days <= 10) {
        price = price * 0.7;
      } else if (days > 10 && days <= 15) {
        price = price * 0.65;
      } else {
        price = price * 0.5;
      }
      break;
    case "president apartment":
      price = overnight * 35.0;
      if (days <= 10) {
        price = price * 0.9;
      } else if (days > 10 && days <= 15) price = price * 0.85;
      else {
        price = price * 0.8;
      }
      break;
  }
  let totalPrice = 0;
  if (grate === "positive") {
    totalPrice = price + price * 0.25;
  } else {
    totalPrice = price - price * 0.1;
  }
  console.log(totalPrice.toFixed(2));
}
skiTrip(["2", "apartment", "positive"]);
