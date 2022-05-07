function firm(input) {
  let neededHours = Number(input[0]);
  let daysForProject = Number(input[1]);
  let employees = Number(input[2]);

  let daysForStudy = daysForProject * 0.9;
  let hoursForproject = daysForStudy * (8 + 2) * employees;
  let diff = Math.floor(hoursForproject - neededHours);

  if (hoursForproject >= neededHours) {
    console.log(`Yes!${diff} hours left.`);
  } else {
    console.log(`Not enough time!${Math.abs(diff)} hours needed.`);
  }
}
firm([`90`, `7`, `3`]);
firm([`99`, `3`, `1`]);
