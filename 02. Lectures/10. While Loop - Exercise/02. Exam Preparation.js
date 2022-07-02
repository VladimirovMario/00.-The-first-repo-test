function examPreparation(input) {
  let index = 0;
  let numOfUnsatisfactoryGrades = Number(input[index]);
  index++;

  let countGoodGrades = 0;
  let countUnsatisfactoryGrades = 0;
  let sumOfGrades = 0;
  let lastTask = ``;

  let task = input[index];
  index++;

  while (task !== "Enough") {
    let grade = Number(input[index]);
    index++;

    if (grade <= 4) {
      countUnsatisfactoryGrades++;
      sumOfGrades += grade;
    } else {
      countGoodGrades++;
      sumOfGrades += grade;
    }

    lastTask = task;

    task = input[index];
    index++;

    if (numOfUnsatisfactoryGrades === countUnsatisfactoryGrades) {
      console.log(
        `You need a break, ${countUnsatisfactoryGrades} poor grades.`
      );
      return;
    }
  }
  let numOfProblems = countUnsatisfactoryGrades + countGoodGrades;
  let average = sumOfGrades / numOfProblems;

  if (task === "Enough") {
    console.log(`Average score: ${average.toFixed(2)}`);
    console.log(`Number of problems: ${numOfProblems}`);
    console.log(`Last problem: ${lastTask}`);
  }
}
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "SpringTime",
  "5",
  "Bus",
  "6",
  "Enough",
]);
console.log(`---`);
examPreparation(["2", "Income", "3", "GameInfo", "6", "BestPlayer", "4"]);
