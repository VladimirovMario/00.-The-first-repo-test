function mathPower(input) {
  function calculatePower(num, power) {
    let result = Math.pow(num, power);
    if (result.toString().indexOf(".") > 0) {
      result = Math.round(result * 1e15) / 1e15;
    }
    return result;
  }
  let num = Number(input[0]);
  let power = Number(input[1]);

  let total = calculatePower(num, power);
  console.log(total);
}
mathPower([`3`, `4`]);
