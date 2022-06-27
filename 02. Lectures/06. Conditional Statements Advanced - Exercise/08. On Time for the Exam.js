function onTimeForTheExam(input) {
  let hourExam = Number(input[0]);
  let minuteExam = Number(input[1]);
  let hourArrive = Number(input[2]);
  let minuteArrive = Number(input[3]);

  let examInMinutes = hourExam * 60 + minuteExam;
  let arriveInMinutes = hourArrive * 60 + minuteArrive;

  let diff = Math.abs(arriveInMinutes - examInMinutes);
  let h = Math.floor(diff / 60);
  let min = diff % 60;

  if (arriveInMinutes > examInMinutes) {
    console.log("Late");
    if (diff >= 60) {
      h = Math.floor(diff / 60);
      min = diff % 60;
      if (min < 10) {
        console.log(`${h}:0${min} hours after the start`);
      } else {
        console.log(`${h}:${min} hours after the start`);
      }
    } else {
      console.log(`${min} minutes after the start`);
    }
  } else if (examInMinutes - arriveInMinutes <= 30) {
    console.log("On time");
    if (examInMinutes - arriveInMinutes !== 0) {
      let diff = Math.abs(examInMinutes - arriveInMinutes);
      let min = diff % 60;
      console.log(`${min} minutes before the start`);
    }
  } else {
    console.log("Early");
    if (examInMinutes - arriveInMinutes >= 60) {
      let diff = Math.abs(examInMinutes - arriveInMinutes);
      let h = Math.floor(diff / 60);
      let min = diff % 60;
      if (min < 10) {
        console.log(`${h}:0${min} hours before the start`);
      } else {
        console.log(`${h}:${min} hours before the start`);
      }
    } else {
      console.log(`${min} minutes before the start`);
    }
  }
}
onTimeForTheExam(["9", "30", "9", "50"]);
