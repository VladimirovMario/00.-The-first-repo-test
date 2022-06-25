function workingHours(input) {
  let hour = Number(input[0]);
  let day = input[1];

  if (hour >= 10 && hour <= 18) {
    switch (day) {
      case `Monday`:
      case `Tuesday`:
      case `Wednesday`:
      case `Thursday`:
      case `Friday`:
      case `Saturday`:
        console.log(`open`);
        break;
      default:
        console.log(`closed`);
        break;
    }
  } else if (!(hour >= 10 && hour <= 18)) console.log(`closed`);
}
workingHours(["10", "Sunday"]);
