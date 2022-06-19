function depositCalculator(input) {
  let deposit = Number(input[0]);
  let termDeposit = Number(input[1]);
  let annual = Number(input[2]);
  let sum = deposit + termDeposit * ((deposit * annual) / 100 / 12);

  console.log(sum);
}
depositCalculator(["1000", "12", "5.7"]);
