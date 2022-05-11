function cinema(input) {
  let projection = input[0].toLowerCase();
  let roles = Number(input[1]);
  let columns = Number(input[2]);

  let totalRevenue = 0;
//   switch (projection) {
//     case `premiere`:
//       totalRevenue = roles * columns * 12.0;
//       break;
//     case `normal`:
//       totalRevenue = roles * columns * 7.5;
//       break;
//     case `discount`:
//       totalRevenue = roles * columns * 5.0;
//       break;
//   }
  if (projection === `premiere`) {
      totalRevenue = (roles * columns) * 12.00;
  } else if (projection === `normal`) {
      totalRevenue = (roles * columns) * 7.50;
  } else if (projection === `discount`) {
      totalRevenue = (roles * columns) * 5.00;
  }
   console.log(totalRevenue.toFixed(2) + ` lv`)
}
cinema([`Premiere`, `10`, `12`]);
cinema([`Normal`, `21`, `13`]);
