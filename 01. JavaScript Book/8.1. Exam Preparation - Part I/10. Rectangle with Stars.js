function rectangleWithStars(input) {
  let num = Number(input[0]);

  let row = 0;
  if (num % 2 === 0) {
    row = num / 2;
  } else {
    row = Math.ceil(num / 2);
  }

  for (let top = 0; top < row; top++) {
    if (top === 0) {
      console.log(`%`.repeat(num * 2));
    } else {
      console.log(`%` + ` `.repeat(num * 2 - 2) + `%`);
    }
  }
  console.log(`%` + ` `.repeat(num - 2) + `**` + ` `.repeat(num - 2) + `%`);

  for (let down = row; down > 0; down--) {
    if (down === 1) {
      console.log(`%`.repeat(num * 2));
    } else {
      console.log(`%` + ` `.repeat(num * 2 - 2) + `%`);
    }
  }
}

rectangleWithStars([`5`]);
