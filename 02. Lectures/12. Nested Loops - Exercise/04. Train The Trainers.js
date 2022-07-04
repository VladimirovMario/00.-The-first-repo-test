function trainTheTrainers(input) {
  let index = 0;
  let numOfPeople = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let countGrades = 0;
  let finalGrades = 0;

  while (command !== "Finish") {
    let presentation = command;
    let sumOfGrades = 0;
    for (let i = 0; i < numOfPeople; i++) {
      let grades = Number(input[index]);
      index++;
      sumOfGrades += grades;
      countGrades++;
    }
    let averageGrade = sumOfGrades / numOfPeople;
    finalGrades += sumOfGrades;

    console.log(`${presentation} - ${averageGrade.toFixed(2)}.`);

    command = input[index];
    index++;
  }
  let finalAssessment = finalGrades / countGrades;

  console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
}
trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
console.log(`---`);
trainTheTrainers([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish",
]);
console.log(`---`);
trainTheTrainers([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
