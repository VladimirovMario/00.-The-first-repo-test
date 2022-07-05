function familyTrip(input) {
  let budget = Number(input[0]);
  let countNights = Number(input[1]);
  let pricePerNight = Number(input[2]);
  let percentageOtherCosts = Number(input[3]);

  if (countNights > 7) {
    pricePerNight *= 0.95;
  }
  let sumForAllNights = countNights * pricePerNight;
  let percent = (budget * percentageOtherCosts) / 100;
  let totalSpend = sumForAllNights + percent;
  let diff = Math.abs(totalSpend - budget);

  if (totalSpend <= budget) {
    console.log(
      `Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`
    );
  } else {
    console.log(`${diff.toFixed(2)} leva needed.`);
  }
}
familyTrip([`800.50`, `8`, `100`, `2`]);
familyTrip([`500`, `7`, `66`, `15`]);
