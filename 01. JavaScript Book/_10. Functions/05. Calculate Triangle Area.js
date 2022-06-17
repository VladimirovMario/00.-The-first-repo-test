function calculateTriangleArea(input) {
  function solve(a, b) {
    return (a * b) / 2;
  }

  let a = Number(input[0]);
  let b = Number(input[1]);

  let area = solve(a, b);

  console.log(area);
}
calculateTriangleArea([`3`, `4`]);
