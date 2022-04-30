function sumSeconds(input) {
  let player1 = Number(input[0]);
  let player2 = Number(input[1]);
  let player3 = Number(input[2]);

  let seconds = player1 + player2 + player3;
  let minutes = 0;

  if (seconds > 59) {
    minutes++;
    seconds -= 60;
  }
  if (seconds > 59) {
    minutes++;
    seconds -= 60;
  }
  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
sumSeconds([`59`, `59`, `59`]);
sumSeconds([`50`, `50`, `49`]);
sumSeconds([`34`, `7`, `22`]);
sumSeconds([`14`, `12`, `10`]);
sumSeconds([`2`, `0.5`, `0.5`]);
