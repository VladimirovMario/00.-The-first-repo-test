function lunchBreak(input) {
  let nameOfSeries = input[0];
  let duration = Number(input[1]);
  let durationBrake = Number(input[2]);
  let lunchTime = Number((durationBrake * 1) / 8);
  let leisureTime = Number((durationBrake * 1) / 4);

  let timeLeft = durationBrake - lunchTime - leisureTime;

  if (timeLeft >= duration) {
    timeLeft = Math.ceil(timeLeft - duration);
    console.log(
      `You have enough time to watch ${nameOfSeries} and left with ${timeLeft} minutes free time.`
    );
  } else if (timeLeft < duration) {
    timeLeft = Math.ceil(duration - timeLeft);
    console.log(
      `You don't have enough time to watch ${nameOfSeries}, you need ${timeLeft} more minutes.`
    );
  }
}
lunchBreak(["Teen Wolf", "48", "60"]);
lunchBreak(["Game of Thrones", "60", "96"]);
