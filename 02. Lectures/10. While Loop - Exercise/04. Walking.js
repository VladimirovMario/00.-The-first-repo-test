function walking(input) {
  let index = 0;
  let command = input[index];
  index++;

  let goal = 10000;
  let counter = 0;

  while (command !== "Going home") {
    let steps = Number(command);

    counter += steps;

    if (counter >= goal) {
      let stepsOverGoal = counter - goal;
      console.log(`Goal reached! Good job!`);
      console.log(`${stepsOverGoal} steps over the goal!`);
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "Going home") {
    let stepsHome = Number(input[index]);
    counter += stepsHome;
    if (counter >= goal) {
      let homeStepsOverGoal = counter - goal;
      console.log(`Goal reached! Good job!`);
      console.log(`${homeStepsOverGoal} steps over the goal!`);
    } else {
      let stepsNeeded = Math.abs(counter - goal);
      console.log(`${stepsNeeded} more steps to reach goal.`);
    }
  }
}
walking(["125", "250", "4000", "30", "2678", "4682"]);
