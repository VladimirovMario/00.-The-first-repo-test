function christmasHat(input) {
  let num = Number(input[0]);

  let width = 4 * num + 1;
  let height = 2 * num + 1;

  let outerDots = Math.ceil(width / 2) - 2;

  console.log(`.`.repeat(outerDots) + `/|\\` + `.`.repeat(outerDots));
  console.log(`.`.repeat(outerDots) + `\\|/` + `.`.repeat(outerDots));

  for (let top = 1; top < height; top++) {
    let topPart =
      `.`.repeat(outerDots) +
      `*` +
      `-`.repeat(top - 1) +
      `*` +
      `-`.repeat(top - 1) +
      `*` +
      `.`.repeat(outerDots);
    console.log(topPart);
    if (top === 2 * num) {
      console.log(`*`.repeat(width));
    }
    outerDots--;
  }

  console.log(`*.`.repeat(num * 2) + `*`);
  console.log(`*`.repeat(width));
}
christmasHat([`5`]);
