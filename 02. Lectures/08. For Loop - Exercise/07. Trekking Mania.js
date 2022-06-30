function trekkingMania(input) {
  let index = 0;
  let numberOfGroups = Number(input[index]);
  index++;

  let p1Counter = 0;
  let p2Counter = 0;
  let p3Counter = 0;
  let p4Counter = 0;
  let p5Counter = 0;
  let sumOfPeople = 0;

  for (let i = 1; i <= numberOfGroups; i++) {
    let numberOfPeople = Number(input[index]);
    index++;

    if (numberOfPeople <= 5) {
      p1Counter += numberOfPeople;
    } else if (numberOfPeople >= 6 && numberOfPeople <= 12) {
      p2Counter += numberOfPeople;
    } else if (numberOfPeople >= 13 && numberOfPeople <= 25) {
      p3Counter += numberOfPeople;
    } else if (numberOfPeople >= 26 && numberOfPeople <= 40) {
      p4Counter += numberOfPeople;
    } else {
      p5Counter += numberOfPeople;
    }

    sumOfPeople += numberOfPeople;
  }
  let p1 = (p1Counter / sumOfPeople) * 100;
  let p2 = (p2Counter / sumOfPeople) * 100;
  let p3 = (p3Counter / sumOfPeople) * 100;
  let p4 = (p4Counter / sumOfPeople) * 100;
  let p5 = (p5Counter / sumOfPeople) * 100;
  console.log(p1.toFixed(2) + `%`);
  console.log(p2.toFixed(2) + `%`);
  console.log(p3.toFixed(2) + `%`);
  console.log(p4.toFixed(2) + `%`);
  console.log(p5.toFixed(2) + `%`);
}
trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
