function gymnastics(input) {
  let country = input[0];
  let gymnasticsEquipment = input[1];

  let difficulty = 0;
  let execution = 0;

  if (country === "Russia") {
    switch (gymnasticsEquipment) {
      case "ribbon":
        difficulty = 9.1;
        execution = 9.4;
        break;
      case "hoop":
        difficulty = 9.3;
        execution = 9.8;
        break;
      case "rope":
        difficulty = 9.6;
        execution = 9.0;
        break;
    }
  } else if (country === "Bulgaria") {
    switch (gymnasticsEquipment) {
      case "ribbon":
        difficulty = 9.6;
        execution = 9.4;
        break;
      case "hoop":
        difficulty = 9.55;
        execution = 9.75;
        break;
      case "rope":
        difficulty = 9.5;
        execution = 9.4;
        break;
    }
  } else if (country === "Italy") {
    switch (gymnasticsEquipment) {
      case "ribbon":
        difficulty = 9.2;
        execution = 9.5;
        break;
      case "hoop":
        difficulty = 9.45;
        execution = 9.35;
        break;
      case "rope":
        difficulty = 9.7;
        execution = 9.15;
        break;
    }
  }

  let grade = difficulty + execution;
  let pointsLeftToMAximum = 20 - grade;
  let percentage = (pointsLeftToMAximum / 20) * 100;
  console.log(
    `The team of ${country} get ${grade.toFixed(3)} on ${gymnasticsEquipment}.`
  );
  console.log(`${percentage.toFixed(2)}%`);
}
gymnastics(["Bulgaria", "ribbon"]);
