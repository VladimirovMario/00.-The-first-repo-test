function magicNumbers(input) {
  let num = Number(input[0]);
  let result = ``;

  for (let n1 = 1; n1 < 10; n1++) {
    for (let n2 = 1; n2 < 10; n2++) {
      for (let n3 = 1; n3 < 10; n3++) {
        for (let n4 = 1; n4 < 10; n4++) {
          for (let n5 = 1; n5 < 10; n5++) {
            for (let n6 = 1; n6 < 10; n6++) {
              if (n1 * n2 * n3 * n4 * n5 * n6 === num) {
                result = result.concat(`${n1}${n2}${n3}${n4}${n5}${n6} `);
              }
            }
          }
        }
      }
    }
  }
  console.log(result);
}
// magicNumbers([`2`]);
magicNumbers([`8`]);
// magicNumbers([`531441`]);
