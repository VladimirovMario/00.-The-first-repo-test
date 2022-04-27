function money(input) {
  let bitcoins = Number(input[0]);
  let chineseYuans = Number(input[1]);
  let commission = Number(input[2]);

  let bitcoin = 1168;
  let chineseYuanInDolar = 0.15;
  let dolar = 1.76;
  let eur = 1.95;

  let sumBitcoins = bitcoin * bitcoins;
  let sumYans = chineseYuans * chineseYuanInDolar;
  let sumDolars = sumYans * dolar;
  let sumEur = (sumBitcoins + sumDolars) / eur;
  let sumCommission = (sumEur * commission) / 100;
  let totalSum = sumEur - sumCommission;

  console.log(totalSum.toFixed(2));
}
money([`1`, `5`, `5`]);
money([`20`, `5678`, `2.4`]);
money([`7`, `50200.12`, `3`]);
