function multiplicationTable(input) {
  let num = Number(input[0]);

  for (let i = 1; i <= 10; i++) {
    let sum = `${i}` * `${num}`;
    console.log(`${i} * ${num} = ${sum}`);
  }
}

multiplicationTable(["5"]);
