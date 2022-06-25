function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let count = Number(input[2]);

  if (day === `Monday` || day === `Tuesday` || day === `Wednesday`) {
    switch (fruit) {
      case `banana`:
        console.log((`${count}` * 2.5).toFixed(2));
        break;
      case `apple`:
        console.log((`${count}` * 1.2).toFixed(2));
        break;
      case `orange`:
        console.log((`${count}` * 0.85).toFixed(2));
        break;
      case `grapefruit`:
        console.log((`${count}` * 1.45).toFixed(2));
        break;
      case `kiwi`:
        console.log((`${count}` * 2.7).toFixed(2));
        break;
      case `pineapple`:
        console.log((`${count}` * 5.5).toFixed(2));
        break;
      case `grapes`:
        console.log((`${count}` * 3.85).toFixed(2));
        break;
      default:
        console.log(`error`);
    }
  } else if (day === `Thursday` || day === `Friday`) {
    switch (fruit) {
      case `banana`:
        console.log((`${count}` * 2.5).toFixed(2));
        break;
      case `apple`:
        console.log((`${count}` * 1.2).toFixed(2));
        break;
      case `orange`:
        console.log((`${count}` * 0.85).toFixed(2));
        break;
      case `grapefruit`:
        console.log((`${count}` * 1.45).toFixed(2));
        break;
      case `kiwi`:
        console.log((`${count}` * 2.7).toFixed(2));
        break;
      case `pineapple`:
        console.log((`${count}` * 5.5).toFixed(2));
        break;
      case `grapes`:
        console.log((`${count}` * 3.85).toFixed(2));
        break;
      default:
        console.log(`error`);
    }
  } else if (day === `Saturday` || day === `Sunday`) {
    switch (fruit) {
      case `banana`:
        console.log((`${count}` * 2.7).toFixed(2));
        break;
      case `apple`:
        console.log((`${count}` * 1.25).toFixed(2));
        break;
      case `orange`:
        console.log((`${count}` * 0.9).toFixed(2));
        break;
      case `grapefruit`:
        console.log((`${count}` * 1.6).toFixed(2));
        break;
      case `kiwi`:
        console.log((`${count}` * 3.0).toFixed(2));
        break;
      case `pineapple`:
        console.log((`${count}` * 5.6).toFixed(2));
        break;
      case `grapes`:
        console.log((`${count}` * 4.2).toFixed(2));
        break;
      default:
        console.log(`error`);
    }
  } else {
    console.log(`error`);
  }
}
fruitShop(["pineapple", "Monday", "0.5"]);
