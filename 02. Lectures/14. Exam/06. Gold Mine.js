function goldMine(input) {
  let index = 0;
  let numOfLocations = Number(input[index]);
  index++;

  let average = 0;

  for (let i = 1; i <= numOfLocations; i++) {
    let averageExtraction = Number(input[index]);
    index++;
    let numOfDays = Number(input[index]);
    index++;

    let sumOfGold = 0;
    for (let j = 1; j <= numOfDays; j++) {
      let extractedGold = Number(input[index]);
      index++;
      sumOfGold += extractedGold;
    }
    average = sumOfGold / numOfDays;
    let diff = averageExtraction - average;

    if (average < averageExtraction) {
      console.log(`You need ${diff.toFixed(2)} gold.`);
    } else {
      console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`);
    }
  }
}
goldMine(["1", "5", "3", "10", "1", "3"]);
