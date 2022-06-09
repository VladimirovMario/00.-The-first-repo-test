function specialNumbers(input) {
  let num = Number(input[0]);
  let result = ``;
  let comparedPairs1 = 0;
  let comparedPairs2 = 0;
  let comparedPairs3 = 0;
  let comparedPairs4 = 0;

  for (let n1 = 1; n1 < 9; n1++) {
    for (let n2 = 1; n2 < 9; n2++) {
      for (let n3 = 1; n3 <= 9; n3++) {
        for (let n4 = 1; n4 <= 9; n4++) {
          comparedPairs1 = num % n1 === 0 && num % n2 === 0 && num % n3 === 0;
          comparedPairs2 = num % n3 === 0 && num % n4 === 0;

          comparedPairs3 = num % n1 !== 0 && num % n2 !== 0 && num % n3 !== 0;
          comparedPairs4 = num % n3 !== 0 && num % n4 !== 0;

          if (comparedPairs1 && comparedPairs2) {
            result = result.concat(`${n1}${n2}${n3}${n4} `);
          } else if (comparedPairs3 && comparedPairs4) {
            break;
          }
        }
      }
    }
  }
  console.log(result);
}
specialNumbers([`16`]);
