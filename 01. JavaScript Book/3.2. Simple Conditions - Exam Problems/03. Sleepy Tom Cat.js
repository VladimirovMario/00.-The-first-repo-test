function sleepyTomCat(input) {
  let dayOff = Number(input[0]);

  let playTimeForYear = 30000;
  let timeDaysOff = dayOff * 127;
  let timeWorkDays = (365 - dayOff) * 63;
  let timeForPlay = timeWorkDays + timeDaysOff;
  let diffTime = Math.abs(playTimeForYear - timeForPlay);
  let m = diffTime % 60;
  let h = Math.floor(diffTime / 60);

  if (timeForPlay <= playTimeForYear) {
    console.log(`Tom sleeps well`);
    console.log(`${h} hours and ${m} minutes less for play`);
  } else {
    console.log(`Tom will run away`);
    console.log(`${h} hours and ${m} minutes more for play`);
  }
}
sleepyTomCat([`20`]);
sleepyTomCat([`113`]);
