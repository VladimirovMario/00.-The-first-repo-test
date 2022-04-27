function dailyEarnings(input) {
  let workingDays = Number(input[0]);
  let earnedMoney = Number(input[1]);
  let usdToBgn = Number(input[2]);

  let sumPerMounth = workingDays * earnedMoney;
  let bonus = sumPerMounth * 2.5;
  let yearEarnedMoney = sumPerMounth * 12 + bonus;
  let tax = (yearEarnedMoney * 25) / 100;
  let totalMoney = yearEarnedMoney - tax;
  let moneyInBgn = totalMoney * usdToBgn;
  let averagePerDay = moneyInBgn / 365;

  console.log(averagePerDay.toFixed(2));
}
dailyEarnings([`21`, `75.00`, `1.59`]);
dailyEarnings([`15`, `105`, `1.71`]);
dailyEarnings([`22`, `199.99`, `1.50`]);
