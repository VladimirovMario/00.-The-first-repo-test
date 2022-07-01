function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;
  let yearGrade = Number(input[index]);
  let grade = 1;
  let excluded = 0;
  let sum = 0;

  let averageGrade = 0;
  while (grade <= 12) {
    yearGrade = Number(input[index]);
    index++;

    if (yearGrade < 4) {
      excluded++;
      if (excluded > 1) {
        console.log(`${name} has been excluded at ${grade} grade`);
        break;
      }
      continue;
    }
    grade++;
    sum += yearGrade;

    averageGrade = sum / 12;
  }
  if (yearGrade >= 4) {
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
  }
}
graduation([
  "George",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
