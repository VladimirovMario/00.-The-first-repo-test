function trapeziodArea(input) {
  let a = parseFloat(input[0]);
  let b = parseFloat(input[1]);
  let h = parseFloat(input[2]);
  let area = ((a + b) * h) / 2;
  console.log(`Trapezoid area = ` + `${area}`);
}
trapeziodArea([`3`, `4`, `5`]);
