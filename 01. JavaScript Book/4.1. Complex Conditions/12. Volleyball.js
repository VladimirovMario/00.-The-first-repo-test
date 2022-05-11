function volleyball(input) {
  let year = input[0].toLowerCase();
  let holidays = Number(input[1]);
  let restDays = Number(input[2]);

  let weekend = 48 - restDays;
  let isWorking = weekend * 0.75;
  let gamesInSofia = isWorking + holidays * 0.66666666667;
  let gamesInRegularCity = restDays;
  let totalGames = gamesInSofia + gamesInRegularCity;

  if (year === `leap`) {
    totalGames = totalGames + totalGames * 0.15;
    console.log(Math.floor(totalGames));
  } else {
    console.log(Math.floor(totalGames));
  }
}
volleyball([`leap`, `5`, `2`]);
volleyball([`normal`, `3`, `2`]);
volleyball([`normal`, `11`, `6`]);
volleyball([`leap`, `0`, `1`]);
