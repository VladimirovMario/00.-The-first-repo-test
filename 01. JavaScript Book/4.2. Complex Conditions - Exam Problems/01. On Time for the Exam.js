function onTimeForTheExam(input) {
  let examHours = Number(input[0]);
  let examMinutes = Number(input[1]);
  let ariveHours = Number(input[2]);
  let ariveMinutes = Number(input[3]);

  let examTimeInMinutes = examHours * 60 + examMinutes;
  let ariveTimeInMinutes = ariveHours * 60 + ariveMinutes;
  let diffInMinutes = Math.abs(examTimeInMinutes - ariveTimeInMinutes);
  let diffInHours = Math.floor(diffInMinutes / 60);
  let diff = diffInMinutes % 60;

  if (examTimeInMinutes < ariveTimeInMinutes) {
    console.log(`Late`);
    if (diffInMinutes < 60) {
      console.log(`${diffInMinutes} minutes after the start`);
    } else if (diff < 10) {
      console.log(`${diffInHours}:0${diff} hours after the start`);
    } else {
      console.log(`${diffInHours}:${diff} hours after the start`);
    }
  } else if (examTimeInMinutes === ariveTimeInMinutes) {
    console.log(`On time`);
  } else if (examTimeInMinutes > ariveTimeInMinutes) {
    if (diffInMinutes <= 30) {
      console.log(`On time`);
      console.log(`${diffInMinutes} minutes before the start`);
    } else if (diffInMinutes >= 60) {
      console.log(`Early`);
      if (diff < 10) {
        console.log(`${diffInHours}:0${diff} hours before the start`);
      } else {
        console.log(`${diffInHours}:${diff} hours before the start`);
      }
    } else {
      console.log(`Early`);
      console.log(`${diffInMinutes} minutes before the start`);
    }
  }
}
onTimeForTheExam([`9`, `30`, `9`, `50`]);
//expected output: Late
//20 minutes after the start
console.log(`---`);
onTimeForTheExam([`16`, `00`, `15`, `00`]);
//expected output: Early
//1:00 hours before the start
console.log(`---`);
onTimeForTheExam([`9`, `00`, `8`, `30`]);
//expected output: On time
// 30 minutes before the start
console.log(`---`);
onTimeForTheExam([`9`, `00`, `10`, `30`]);
//expected output: Late
// 1:30 hours after the start
console.log(`---`);
onTimeForTheExam([`14`, `00`, `13`, `55`]);
//expected output: On time
// 5 minutes before the start
console.log(`---`);
onTimeForTheExam([`11`, `30`, `8`, `12`]);
//expected output: Early
// 3:18 hours before the start
console.log(`---`);
onTimeForTheExam([`10`, `00`, `10`, `00`]);
//expected output: On time
console.log(`---`);
onTimeForTheExam([`11`, `30`, `10`, `55`]);
//expected output: Early
// 35 minutes before the start
console.log(`---`);
onTimeForTheExam([`11`, `30`, `12`, `29`]);
//expected output: Late
// 59 minutes after the start
