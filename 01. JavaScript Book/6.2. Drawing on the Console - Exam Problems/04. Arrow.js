function arrow(input) {
  let num = Number(input[0]);

  let onePart = num - 1;
  let outerDotsUp = (num - 1) / 2;

  let outerDots = ``;
  let arrowLine = ``;
  let middle = ``;
  for (let top = 1; top <= onePart; top++) {
    outerDots = `.`.repeat(outerDotsUp);
    arrowLine = `#`;
    if (top === 1) {
      outerDots = `.`.repeat(outerDotsUp);
      arrowLine = `#`.repeat(num);
      console.log(outerDots + arrowLine + outerDots);
    } else {
      middle = `.`.repeat(num - 2);
      console.log(outerDots + arrowLine + middle + arrowLine + outerDots);
    }
  }
  let middlePart =
    arrowLine.repeat((num + 1) / 2) + middle + arrowLine.repeat((num + 1) / 2);
  console.log(middlePart);

  let lenghtInnerDots = num * 2 - 1 - 4;

  for (let down = 1; down <= onePart - 1; down++) {
    outerDots = `.`.repeat(down);
    let innerDos = `.`.repeat(lenghtInnerDots);

    console.log(outerDots + arrowLine + innerDos + arrowLine + outerDots);

    lenghtInnerDots -= 2;
  }
  console.log(`.`.repeat(num - 1) + arrowLine + `.`.repeat(num - 1));
}
arrow([`5`]);
