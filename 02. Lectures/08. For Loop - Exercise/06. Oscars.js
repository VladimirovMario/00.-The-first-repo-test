function oscars(input) {
  let index = 0;
  let nameOfActor = input[index];
  index++;

  let points = Number(input[index]);
  index++;
  let numberOfEvaluators = Number(input[index]);
  index++;

  let brakePoint = 1250.5;

  for (let i = 0; i < numberOfEvaluators; i++) {
    let nameEvaluators = input[index];
    index++;
    let pointsEvaluators = Number(input[index]);
    index++;
    points += (nameEvaluators.length * pointsEvaluators) / 2;

    if (points > brakePoint) {
      console.log(
        `Congratulations, ${nameOfActor} got a nominee for leading role with ${points.toFixed(
          1
        )}!`
      );
      break;
    }
  }
  if (points < brakePoint) {
    let diff = brakePoint - points;
    console.log(`Sorry, ${nameOfActor} you need ${diff.toFixed(1)} more!`);
  }
}

oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
