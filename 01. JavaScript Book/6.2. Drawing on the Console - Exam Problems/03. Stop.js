function stop(input) {
  let num = Number(input[0]);

  let topPart = num + 2;
  let downPart = num;

  let outerDots = ``;

  let firstLineRepeat = 2 * num + 1;
  let middleFirstLine = ``;

  let middleLineRepeat = 2 * num + 1 - 2;
  let middle = ``;

  let start = ``;
  let end = ``;

  for (top = 1; top <= topPart - 1; top++) {
    outerDots = `.`.repeat(topPart - top);
    start = `//`;
    middle = `_`.repeat(middleLineRepeat);
    end = `\\\\`;
    if (top === 1) {
      middleFirstLine = `_`.repeat(firstLineRepeat);
      console.log(outerDots + middleFirstLine + outerDots);
    } else {
      console.log(outerDots + start + middle + end + outerDots);
      middleLineRepeat += 2;
    }
  }
  let middleRepeat = 2 * num + 1 - 4;
  let middleForstop = `_`.repeat(middleRepeat);
  let middlePart = `${start}${middleForstop}STOP!${middleForstop}${end}`;
  console.log(middlePart);

  for (let down = 0; down < downPart; down++) {
    outerDots = `.`.repeat(down);
    let endForDown = `//`;
    let middleDownPart = `_`.repeat(middleLineRepeat);
    let start = `\\\\`;

    if (down === num - 1) {
      console.log(outerDots + start + middleDownPart + endForDown + outerDots);
    } else {
      console.log(outerDots + start + middleDownPart + endForDown + outerDots);
    }
    middleLineRepeat -= 2;
  }
}
stop([`7`]);
// Expected output:
/*
........_______________........
.......//_____________\\.......
......//_______________\\......
.....//_________________\\.....
....//___________________\\....
...//_____________________\\...
..//_______________________\\..
.//_________________________\\.
//___________STOP!___________\\
\\___________________________//
.\\_________________________//.
..\\_______________________//..
...\\_____________________//...
....\\___________________//....
.....\\_________________//.....
......\\_______________//......
*/

