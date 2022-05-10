function tradeComissions(input) {
  let town = input[0].toLowerCase();
  let sales = Number(input[1]);

  let commission = -1;

  if (town === `sofia`) {
    if (sales >= 0 && sales <= 500) {
      commission = sales * 0.05;
    } else if (sales > 500 && sales <= 1000) {
      commission = sales * 0.07;
    } else if (sales > 1000 && sales <= 10000) {
      commission = sales * 0.08;
    } else if (sales > 10000) {
      commission = sales * 0.12;
    }
  } else if (town === `varna`) {
    if (sales >= 0 && sales <= 500) {
      commission = sales * 0.045;
    } else if (sales > 500 && sales <= 1000) {
      commission = sales * 0.075;
    } else if (sales > 1000 && sales <= 10000) {
      commission = sales * 0.1;
    } else if (sales > 10000) {
      commission = sales * 0.13;
    }
  } else if (town === `plovdiv`) {
    if (sales >= 0 && sales <= 500) {
      commission = sales * 0.055;
    } else if (sales > 500 && sales <= 1000) {
      commission = sales * 0.08;
    } else if (sales > 1000 && sales <= 10000) {
      commission = sales * 0.12;
    } else if (sales > 10000) {
      commission = sales * 0.145;
    }
  }
  if (commission >= 0) {
    console.log(`${commission.toFixed(2)}`);
  } else {
    console.log(`error`);
  }
}
tradeComissions([`Sofia`, `1500`]);
tradeComissions([`Plovdiv`, `499.99`]);
tradeComissions([`Burgas`, `1500`]);
