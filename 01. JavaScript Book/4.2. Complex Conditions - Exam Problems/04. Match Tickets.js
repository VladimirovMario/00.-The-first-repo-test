function matchTickets(input) {
  let budget = Number(input[0]);
  let category = input[1].toLowerCase();
  let countPeople = Number(input[2]);

  let priceForVip = 499.99;
  let priceForNormal = 249.99;

  let transport = 0;

  if (countPeople !== 0 && countPeople <= 4) {
    transport = budget * 0.75;
  } else if (countPeople <= 9) {
    transport = budget * 0.6;
  } else if (countPeople <= 24) {
    transport = budget * 0.5;
  } else if (countPeople <= 49) {
    transport = budget * 0.4;
  } else {
    transport = budget * 0.25;
  }

  let moneyWithoutTransport = budget - transport;
  let moneyLeft = 0;

  if (category === `normal`) {
    let ticketCost = priceForNormal * countPeople;
    moneyLeft = moneyWithoutTransport - ticketCost;
  } else {
    let ticketCost = priceForVip * countPeople;
    moneyLeft = moneyWithoutTransport - ticketCost;
  }

  if (moneyLeft >= 0) {
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${Math.abs(moneyLeft).toFixed(2)} leva.`
    );
  }
}
matchTickets([`1000`, `Normal`, `1`]);
matchTickets([`30000`, `vip`, `49`]);
