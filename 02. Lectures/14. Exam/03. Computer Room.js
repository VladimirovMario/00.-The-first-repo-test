function computerRoom(input) {
  let month = input[0];
  let hours = Number(input[1]);
  let numOfPeople = Number(input[2]);
  let dayTime = input[3];

  let price = 0;

  if (month === "march" || month === "april" || month === `may`) {
    switch (dayTime) {
      case `day`:
        price = 10.5;
        break;
      case `night`:
        price = 8.4;
        break;
    }
  } else if (month === "june" || month === "july" || month === `august`) {
    switch (dayTime) {
      case `day`:
        price = 12.6;
        break;
      case `night`:
        price = 10.2;
        break;
    }
  }
  if (numOfPeople >= 4) {
    price *= 0.9;
  }
  if (hours >= 5) {
    price *= 0.5;
  }
  let totalPrice = price * numOfPeople * hours;

  console.log(`Price per person for one hour: ${price.toFixed(2)}`);
  console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
}
computerRoom(["march", "3", "3", "day"]);
