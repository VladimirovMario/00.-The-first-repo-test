function powersOfTwo(input) {
  let num = Number(input[0]);

  for (let i = 0; i <= num; i++) {
    console.log(Math.pow(2, i));
  }
}
powersOfTwo([`10`]);
