function backToThePast(input) {
  let heritage = Number(input[0]);
  let year = Number(input[1]);

  let ageIvan = 18;
  let startYear = 1800;
  let moneySpendEven = 0;
  let moneySpendOdd = 0;

  for (i = startYear; i <= year; i++) {
    if (i % 2 === 0) {
      moneySpendEven += 12000;
    } else {
      ageIvan++;
      moneySpendOdd += 12000 + 50 * ageIvan;
      ageIvan++;
    }
  }
  let totalSpednMoney = moneySpendEven + moneySpendOdd;
  let isMoneyLeft = Math.abs(heritage - totalSpednMoney);

  if (heritage >= totalSpednMoney) {
    console.log(
      `Yes! He will live a carefree life and will have ${isMoneyLeft.toFixed(
        2
      )} dollars left.`
    );
  } else {
    console.log(`He will need ${isMoneyLeft.toFixed(2)} dollars to survive.`);
  }
}
backToThePast([`50000`, `1802`]);
backToThePast([`100000.15`, `1808`]);
