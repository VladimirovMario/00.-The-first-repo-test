function personalTitles(input) {
  let age = Number(input[0]);
  let gender = input[1];

  if (age >= 16) {
    if (gender === `m`) {
      console.log(`Mr.`);
    } else {
      console.log(`Ms.`);
    }
  } else if (age < 16) {
    if (gender === `m`) {
      console.log(`Master`);
    } else {
      console.log(`Miss`);
    }
  }
}
personalTitles([`12`, `f`]);
personalTitles([`17`, `m`]);
personalTitles([`25`, `f`]);
personalTitles([`13.5`, `m`]);
