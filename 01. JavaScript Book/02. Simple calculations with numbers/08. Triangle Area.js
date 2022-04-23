function triangleArea(input) {
  let a = parseFloat(input[0]);
  let h = parseFloat(input[1]);

  let area = (a * h) / 2;

  console.log(`Triangle area = ` + area.toFixed(2));
}
triangleArea([`1.23456`, `4.56789`]);
