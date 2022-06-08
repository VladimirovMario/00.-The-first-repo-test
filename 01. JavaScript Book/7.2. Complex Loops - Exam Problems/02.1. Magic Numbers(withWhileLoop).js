function magicNumbers(input) {
  let num = Number(input[0]);
  let result = ``;

  let d1 = 1;
  while (d1 < 10) {
    let d2 = 1;
    while (d2 < 10) {
      let d3 = 1;
      while (d3 < 10) {
        let d4 = 1;
        while (d4 < 10) {
          let d5 = 1;
          while (d5 < 10) {
            let d6 = 1;
            while (d6 < 10) {
              if (d1 * d2 * d3 * d4 * d5 * d6 === num) {
                result = result.concat(`${d1}${d2}${d3}${d4}${d5}${d6} `);
              }
              d6++;
            }
            d5++;
          }
          d4++;
        }
        d3++;
      }
      d2++;
    }
    d1++;
  }
  console.log(result);
}
magicNumbers([`2`]);
// magicNumbers([`8`]);
// magicNumbers([`531441`]);
