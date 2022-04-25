function calculateSquareArea(a) {
  console.log(`Square area = ` + a * a);
}
calculateSquareArea([`5`]);

//This is the same sors code

function calculateSquareArea(input) {
  let a = Number(input[0]);
  let area = a * a;
  console.log(`Square area = ` + area);
}
calculateSquareArea([`4`]);

//This is the same sors code

function calculateSquareArea([arg1]) {
  let a = parseInt(arg1);
  let area = a * a;
  console.log(`Square area = ` + area);
}
calculateSquareArea([`3`]);
