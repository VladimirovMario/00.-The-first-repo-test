function house(input) {
  let num = Number(input[0]);

  let startingStars = 0;
  let height = 0;
  let heightCeil = 0;

  if (num % 2 === 0) {
    startingStars = 2;
    height = num / 2;
    heightCeil = num / 2;
  } else {
    startingStars = 1;
    height = Math.floor(num / 2);
    heightCeil = Math.ceil(num / 2);
  }

  for (let ceiling = 1; ceiling <= heightCeil; ceiling++) {
    let line = `-`.repeat(heightCeil - ceiling);
    line += `*`.repeat(startingStars);
    line += `-`.repeat(heightCeil - ceiling);
    startingStars += 2;
    console.log(line);
  }
  for (let body = 1; body <= height; body++) {
    let base = `|`;
    for (let i = 1; i <= num - 2; i++) {
      base += `*`;
    }
    base += `|`;
    console.log(base);
  }
}
house([`13`]);
// expected output
/*
------*------
-----***-----
----*****----
---*******---
--*********--
-***********-
*************
|***********|
|***********|
|***********|
|***********|
|***********|
|***********|
*/


