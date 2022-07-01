function minNumber(input) {
  let index = 0;
  let inputElement = input[index];
  let min = Number.MAX_SAFE_INTEGER;

  while (inputElement !== "Stop") {
    let currentNum = Number(inputElement);
    if (currentNum < min) {
      min = currentNum;
    }
    inputElement = input[index];
    index++;
  }
  console.log(min);
}
minNumber(["45", "-20", "7", "99", "Stop"]);
