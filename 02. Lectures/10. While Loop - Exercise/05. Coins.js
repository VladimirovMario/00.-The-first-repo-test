function coins(input) {
  let changeMustReturn = Number(input[0]);
  let change = Math.trunc(changeMustReturn * 100);

  let counter = 0;

  while (change > 0) {
    if (change >= 200) {
      change -= 200;
      counter++;
    } else if (change >= 100) {
      change -= 100;
      counter++;
    } else if (change >= 50) {
      change -= 50;
      counter++;
    } else if (change >= 20) {
      change -= 20;
      counter++;
    } else if (change >= 10) {
      change -= 10;
      counter++;
    } else if (change >= 5) {
      change -= 5;
      counter++;
    } else if (change >= 2) {
      change -= 2;
      counter++;
    } else if (change >= 1) {
      change -= 1;
      counter++;
    }
  }
  console.log(counter);
}

coins([`0.59`]);
coins([`2`]);
coins([`2.73`]);
coins([`1.23`]);
