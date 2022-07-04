function specialNumbers(input) {
  let num = Number(input[0]);
  let result = ``;

  for (let n1 = 0; n1 <= 9; n1++) {
    for (let n2 = 0; n2 <= 9; n2++) {
      for (let n3 = 0; n3 <= 9; n3++) {
        for (let n4 = 0; n4 <= 9; n4++) {
          if (
            num % n1 === 0 &&
            num % n2 === 0 &&
            num % n3 === 0 &&
            num % n4 === 0
          ) {
            result = result.concat(`${n1}${n2}${n3}${n4} `);
          }
        }
      }
    }
  }
  console.log(result);
}
specialNumbers(["3"]);
