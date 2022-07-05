function movieRatings(input) {
  let index = 0;
  let numOfFilms = Number(input[index]);
  index++;

  let outputMaxRating = ``;
  let outputMinRating = ``;
  let maxFilmRating = Number.MIN_SAFE_INTEGER;
  let minFilmRating = Number.MAX_SAFE_INTEGER;

  let sumAverageRating = 0;
  for (let i = 1; i <= numOfFilms; i++) {
    let nameOfFilm = input[index];
    index++;
    let rating = Number(input[index]);
    index++;

    if (maxFilmRating < rating) {
      maxFilmRating = rating;
      outputMaxRating = nameOfFilm;
    }
    if (minFilmRating > rating) {
      minFilmRating = rating;
      outputMinRating = nameOfFilm;
    }

    sumAverageRating += rating;
  }
  let averageRaiting = sumAverageRating / numOfFilms;

  console.log(
    `${outputMaxRating} is with highest rating: ${maxFilmRating.toFixed(1)}`
  );
  console.log(
    `${outputMinRating} is with lowest rating: ${minFilmRating.toFixed(1)}`
  );
  console.log(`Average rating: ${averageRaiting.toFixed(1)}`);
}
movieRatings([
  `5`,
  `A Star is Born`,
  `7.8`,
  `Creed 2`,
  `7.3`,
  `Mary Poppins`,
  `7.2`,
  `Vice`,
  `7.2`,
  `Captain Marvel`,
  `7.1`,
]);
// movieRatings([`3`,`Interstellar`,`8.5`,`Dangal`,`8.3`,`Green Book`,`8.2`])
