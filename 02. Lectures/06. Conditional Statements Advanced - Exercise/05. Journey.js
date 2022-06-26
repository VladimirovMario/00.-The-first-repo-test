function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      typeVacation = "Camp";
      percentBudget = budget * 0.3;
    } else if (season === "winter") {
      typeVacation = "Hotel";
      percentBudget = budget * 0.7;
    }
  }
  if (budget > 100 && budget <= 1000) {
    destination = "Balkans";
    if (season === "summer") {
      typeVacation = "Camp";
      percentBudget = budget * 0.4;
    } else if (season === "winter") {
      typeVacation = "Hotel";
      percentBudget = budget * 0.8;
    }
  }
  if (budget > 1000) {
    destination = "Europe";
    typeVacation = "Hotel";
    percentBudget = budget * 0.9;
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${typeVacation} - ${percentBudget.toFixed(2)}`);
}
journey(["678.53", "winter"]);
