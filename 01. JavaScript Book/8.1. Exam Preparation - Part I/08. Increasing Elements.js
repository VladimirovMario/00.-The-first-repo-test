function increasingElements(input) {
  let num = Number(input[0]);

  let countCurrentLongest = 0;
  let countLongest = 0;
  let previousNum = 0;

  for (let i = 1; i <= num; i++) {
    let currentNum = Number(input[i]);

    if (currentNum > previousNum) {
      countCurrentLongest++;
    } else {
      countCurrentLongest = 1;
    }
    previousNum = currentNum;
    if (countCurrentLongest > countLongest) {
      countLongest = countCurrentLongest;
    }
  }
  console.log(countLongest);
}
increasingElements([`3`, `5`, `2`, `4`]);
increasingElements([`4`, `2`, `8`, `7`, `6`])
increasingElements([`4`, `1`, `2`, `4`, `4`])
increasingElements([`4`, `5`, `6`, `7`, `8`])
