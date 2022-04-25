function celsiusToFahrenheit(input) {
  let celsius = parseFloat(input[0]);
  let fahrenheit = celsius * 1.8 + 32.0;

  console.log(fahrenheit.toFixed(2));
}
celsiusToFahrenheit([`32.3`]);
