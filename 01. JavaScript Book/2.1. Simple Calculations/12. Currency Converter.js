function currencyConverter(input) {
  let sum = parseFloat(input[0]);
  let inputCurrency = input[1];
  let outputCurrency = input[2];

  switch (inputCurrency) {
    case `USD`:
      sum *= 1.79549;
      break;
    case `EUR`:
      sum *= 1.95583;
      break;
    case `GBP`:
      sum *= 2.53405;
      break;
  }
  switch (outputCurrency) {
    case `USD`:
      sum /= 1.79549;
      break;
    case `EUR`:
      sum /= 1.95583;
      break;
    case `GBP`:
      sum /= 2.53405;
      break;
  }
  console.log(sum.toFixed(2) + ` ${outputCurrency}`);
}
currencyConverter([`20`, `USD`, `BGN`]);
currencyConverter([`100`, `BGN`, `EUR`]);
currencyConverter([`12.35`, `EUR`, `GBP`]);
currencyConverter([`150.35`, `USD`, `EUR`]);
