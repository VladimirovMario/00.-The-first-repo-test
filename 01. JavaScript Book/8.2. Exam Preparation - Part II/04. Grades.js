function grades(input) {
  let index = 0;
  let numOfStudents = Number(input[index]);
  index++;

  let topStudentsCounter = 0;
  let averageStudentsCounter = 0;
  let lowStudentsCounter = 0;
  let failStudentsCounter = 0;

  let averageCounter = 0;
  for (let i = 1; i <= numOfStudents; i++) {
    let currentGrade = Number(input[index]);
    index++;
    if (currentGrade >= 5.0) {
      topStudentsCounter++;
      averageCounter += currentGrade;
    } else if (currentGrade >= 4.0 && currentGrade <= 4.99) {
      averageStudentsCounter++;
      averageCounter += currentGrade;
    } else if (currentGrade >= 3.0 && currentGrade <= 3.99) {
      lowStudentsCounter++;
      averageCounter += currentGrade;
    } else if (currentGrade < 3.0) {
      failStudentsCounter++;
      averageCounter += currentGrade;
    }
  }

  let average = (averageCounter / numOfStudents).toFixed(2);
  let percentageTop = (topStudentsCounter / numOfStudents) * 100;
  let percentageAverage = (averageStudentsCounter / numOfStudents) * 100;
  let percentageLow = (lowStudentsCounter / numOfStudents) * 100;
  let percentageFail = (failStudentsCounter / numOfStudents) * 100;

  console.log(`Top students: ${percentageTop.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${percentageAverage.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${percentageLow.toFixed(2)}%`);
  console.log(`Fail: ${percentageFail.toFixed(2)}%`);
  console.log(`Average: ${average}`);
}
grades([`6`, `2`, `3`, `4`, `5`, `6`, `2.2`]);
console.log(`---`);
grades([10, 3.0, 2.99, 5.68, 3.01, 4, 4, 6.0, 4.5, 2.44, 5]);
