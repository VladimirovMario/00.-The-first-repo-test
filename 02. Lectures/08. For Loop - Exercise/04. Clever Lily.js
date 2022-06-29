function cleverLily(input) {
  let age = Number(input[0]);
  let price = Number(input[1]);
  let toyPrice = Number(input[2]);

  let money = 10;
  let savedMoney = 0;
  let toyCount = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      savedMoney += money;
      money += 10;
      savedMoney --;
    } else {
      toyCount++;
    }
  }
  savedMoney += toyCount * toyPrice;
  if (savedMoney >= price) {
    moneyLeft = savedMoney - price;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    moneyLeft = Math.abs(savedMoney - price);
    console.log(`No! ${moneyLeft.toFixed(2)}`);
  }
}
cleverLily(["21", "1570.98", "3"]);
