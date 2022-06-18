function concatenateData(input) {
  let name = input[0];
  let lastName = input[1];
  let age = Number(input[2]);
  let town = input[3];
  console.log(
    `I am ${name} ${lastName}, a ${age}-years old person from ${town}.`
  );
}
concatenateData([`Mario`, `Vladimirov`, 37, `Sofiq`]);
