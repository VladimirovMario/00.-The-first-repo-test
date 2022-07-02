function vacation(input) {
  let index = 0;
  let needMoney = Number(input[index]);
  index++;
  let money = Number(input[index]);
  index++;

  let countDays = 0;
  let countSpend = 0;
  let isMoneySaved = true;

  while (money < needMoney) {
    countDays++;

    let type = input[index];
    index++;
    let sum = Number(input[index]);
    index++;
    if (type === "spend") {
      countSpend++;
      money -= sum;
      if (money < 0) {
        money = 0;
      }
    } else if (type === "save") {
      money += sum;
      countSpend = 0;
    }
    if (countSpend === 5) {
      console.log("You can't save the money.");
      console.log(`${countDays}`);
      isMoneySaved = false;
      break;
    }
  }
  if (isMoneySaved) {
    console.log(`You saved the money for ${countDays} days.`);
  }
}
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
