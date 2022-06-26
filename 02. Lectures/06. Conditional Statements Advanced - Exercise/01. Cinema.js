function cinema(input) {
  let projection = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);
  let income = 0;

  switch (projection) {
    case `Premiere`:
      income = rows * columns * 12.0;
      break;
    case `Normal`:
      income = rows * columns * 7.5;
      break;
    case `Discount`:
      income = rows * columns * 5.0;
      break;
  }
  if (
    projection === `Premiere` ||
    projection === `Normal` ||
    projection === `Discount`
  ) {
    console.log(`${income.toFixed(2)} leva`);
  }
}
cinema(["Discount", "12", "30"]);
