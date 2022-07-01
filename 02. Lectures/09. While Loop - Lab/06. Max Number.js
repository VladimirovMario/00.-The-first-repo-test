function maxNumber(input) {
  let index = 0;
  let command = input[index];
  let maxNum = Number.MIN_SAFE_INTEGER;
 
  while (command !== "Stop") {
    let x = Number(command);
    if (x > maxNum) {
      maxNum = x;
    }
    command = input[index];
    index++;
  }
  console.log(maxNum);
}
maxNumber(["100", "99", "110", "70", "Stop"]);
