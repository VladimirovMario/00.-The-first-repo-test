function rectangleOfNxNStars(input) {
  let num = Number(input[0]);

  for (let i = 1; i <= num; i++) {
    let stars = ``;
    for (let j = 1; j <= num; j++) {
      stars += `*`;
    }
    console.log(stars);
  }
}
rectangleOfNxNStars([`4`]);

// function rectangleOfNxNStars(input) {

//     let num = Number(input[0]);

//     for (let i = 1; i <= num; i++) {
//         console.log(`*`.repeat(num) + `\n`);
//     }

// }
// rectangleOfNxNStars([`4`])
