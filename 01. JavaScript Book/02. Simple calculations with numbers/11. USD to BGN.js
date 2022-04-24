function uSDToBGN(input) {
  let usd = parseFloat(input[0]);

  let bgn = usd * 1.79549;
  console.log(bgn.toFixed(2) + ` BGN`);
}
uSDToBGN([`12.5`]);
