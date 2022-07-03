function combinations(input) {
  let num = Number(input[0]);
  let counter = 0;

  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      for (let k = 0; k <= num; k++) {
        if (i + j + k === num) {
          counter++;
        }
      }
    }
  }
  console.log(counter);
}
combinations([`5`]);
