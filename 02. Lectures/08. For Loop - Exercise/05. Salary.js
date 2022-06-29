function salary(input) {
  let index = 0;
  let openTabs = Number(input[index]);
  index++;
  let pay = Number(input[index]);
  index++;
  let ifHaveMoney = true;

  for (let i = 0; i < openTabs; i++) {
    let countOpenTabs = input[index];
    index++;
    if (countOpenTabs === "Facebook") {
      pay -= 150;
    } else if (countOpenTabs === "Instagram") {
      pay -= 100;
    } else if (countOpenTabs === "Reddit") {
      pay -= 50;
    }
    if (pay <= 0) {
      ifHaveMoney = false;
      console.log("You have lost your salary.");
      break;
    }
  }
  if (ifHaveMoney > 0) {
    console.log(`${pay}`);
  }
}
salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
console.log(`---`);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
