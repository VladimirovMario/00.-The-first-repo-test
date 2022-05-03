function time15Minutes(input) {
  let hours = Number(input[0]);
  let min = Number(input[1]);

  let minutes = min + 15;

  if (minutes > 59) {
    hours++;
    minutes -= 60;
    if (hours > 23) {
      hours = 0;
    }
  }
  if (minutes < 10) {
    console.log(`${hours}:0${minutes}`);
  } else {
    console.log(`${hours}:${minutes}`);
  }
}
time15Minutes([`1`, `46`]);
time15Minutes([`0`, `01`]);
time15Minutes([`23`, `59`]);
time15Minutes([`11`, `08`]);
