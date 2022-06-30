function sumNumbers(input) {
  let startNum = Number(input[0]);
  let sum = 0;

  let index = 1;
  while (sum < startNum) {
    let num = Number(input[index]);
    sum += num;
    index++;
  }
  console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"]);
