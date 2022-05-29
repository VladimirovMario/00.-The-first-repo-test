function diamond(input) {
  let num = Number(input[0]);

  let startingStars = ``;
  let topPart = 0;
  let downPart = 0;

  let leftRightDashes = Math.floor((num - 1) / 2);
  let mid = num - 2 * leftRightDashes - 2;
  let dashes = ``;

  if (num < 3) {
    console.log(`*`.repeat(num));
    return;
  }

  if (num % 2 !== 0) {
    startingStars = `*`;
    topPart = Math.floor(num / 2 + 1);
    downPart = Math.floor((num - 1) / 2);
  } else {
    startingStars = `**`;
    topPart = num / 2;
    downPart = Math.floor((num - 1) / 2);
  }

  let middle = ``;
  for (let top = 0; top < topPart; top++) {
    dashes = `-`.repeat(leftRightDashes - top);
    let star = `*`;

    if (top <= 0) {
      console.log(dashes + startingStars + dashes);
    } else {
      middle = `-`.repeat(mid + top);
      console.log(dashes + star + middle + star + dashes);
    }
    mid++;
  }
  let downRepeat = num - 4;
  for (let down = downPart - 1; down > 0; down--) {
    dashes = `-`.repeat(downPart - down);
    let star = `*`;
    let middle = `-`.repeat(downRepeat);

    console.log(dashes + star + middle + star + dashes);

    downRepeat -= 2;
  }
  console.log(
    `-`.repeat(Math.ceil(num / 2 - 1)) +
      startingStars +
      `-`.repeat(Math.ceil(num / 2 - 1))
  );
}
diamond([`20`]);
/* expected output:
---------**---------
--------*--*--------
-------*----*-------
------*------*------
-----*--------*-----
----*----------*----
---*------------*---
--*--------------*--
-*----------------*-
*------------------*
-*----------------*-
--*--------------*--
---*------------*---
----*----------*----
-----*--------*-----
------*------*------
-------*----*-------
--------*--*--------
---------**---------
*/
// diamond([`2`]);
// diamond([`1`]);
// diamond([`4`]);
