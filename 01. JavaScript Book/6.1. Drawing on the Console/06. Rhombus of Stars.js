function rhombusOfStars(input) {
  let num = Number(input[0]);

  for (let row = 1; row <= num; row++) {
    let line = ``;
    for (let col = 1; col <= num - row; col++) {
      line += ` `;
    }
    line += `*`;

    for (let col = 1; col < row; col++) {
      line += ` *`;
    }
    console.log(line);
  }
  for (let row = 1; row <= num - 1; row++) {
    line = ``;
    for (let col = 1; col < row; col++) {
      line += ` `;
    }
    for (let col = 1; col <= num - row; col++) {
      line += ` *`;
    }
    console.log(line);
  }
}
rhombusOfStars([`6`]);
// expected output 
/*
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *
 * * * * *
  * * * *
   * * *
    * *
     *
*/
