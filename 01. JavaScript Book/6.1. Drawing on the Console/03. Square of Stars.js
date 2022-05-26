function squareOfStars(input) {
  let num = Number(input[0]);

  for (let i = 1; i <= num; i++) {
    let stars = `*`;
    for (let j = 1; j < num; j++) {
      stars += ` *`;
    }
    console.log(stars);
  }
}
squareOfStars([`3`]);

