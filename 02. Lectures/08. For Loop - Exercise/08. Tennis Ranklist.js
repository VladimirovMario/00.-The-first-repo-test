function tennisRankList(input) {
  let index = 0;
  let tournament = Number(input[index]);
  index++;
  let startPoints = Number(input[index]);
  index++;

  let points = 0;
  let p1counter = 0;
  let p2counter = 0;
  let p3counter = 0;
  let percentageCounter = 0;
  let averagePoints = 0;

  for (let i = 1; i <= tournament; i++) {
    let stageOfTournament = input[index];
    index++;
    if (stageOfTournament === "W") {
      percentageCounter++;
      points = 2000;
      p1counter += points;
    } else if (stageOfTournament === "F") {
      points = 1200;
      p2counter += points;
    } else if (stageOfTournament === "SF") {
      points = 720;
      p3counter += points;
    }
    finalPoints = startPoints + p1counter + p2counter + p3counter;
    averagePoints = (p1counter + p2counter + p3counter) / tournament;
    percentage = (percentageCounter / tournament) * 100;
  }
  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${Math.floor(averagePoints)}`);
  console.log(`${percentage.toFixed(2)}%`);
}
tennisRankList(["5", "1400", "F", "SF", "W", "W", "SF"]);
