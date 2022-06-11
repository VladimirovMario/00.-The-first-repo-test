function dateAfter5Days(input) {
  let day = Number(input[0]);
  let month = Number(input[1]);

  let daysOfMonth = 0;

  if (month === 4 || month === 6 || month === 9 || month === 11) {
    daysOfMonth = 30;
  } else if (month === 2) {
    daysOfMonth = 28;
  } else {
    daysOfMonth = 31;
  }
  day += 5;

  if (day > daysOfMonth) {
    month++;
    day -= daysOfMonth;
    if (month > 12) {
      month = 1;
    }
  }

  if (month < 10) {
    console.log(`${day}.0${month}`);
  } else {
    console.log(`${day}.${month}`);
  }
}
dateAfter5Days([`28`, `03`]);
dateAfter5Days([`27`, `12`]);
dateAfter5Days([`25`, `1`]);
dateAfter5Days([`26`, `02`]);
