function excellentOrNot(input) {
  let grade = Number(input[0]);

  if (grade >= 5.5) {
    console.log(`Excellent!`);
  } else {
    console.log(`Not excellent.`);
  }
}

excellentOrNot([`3.3`]);
