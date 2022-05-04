function numberFrom0To100ToText(input) {
  let num = Number(input[0]);
  let dozens = Math.floor(num / 10);
  let units = num % 10;
  let resultDozens = ``;
  let resultUnits = ``;

  if (units === 1) {
    resultUnits = `one`;
  } else if (units === 2) {
    resultUnits = `two`;
  } else if (units === 3) {
    resultUnits = `three`;
  } else if (units === 4) {
    resultUnits = `four`;
  } else if (units === 5) {
    resultUnits = `five`;
  } else if (units === 6) {
    resultUnits = `six`;
  } else if (units === 7) {
    resultUnits = `seven`;
  } else if (units === 8) {
    resultUnits = `eight`;
  } else if (units === 9) {
    resultUnits = `nine`;
  }
  if (dozens === 2) {
    resultDozens = `twenty`;
  } else if (dozens === 3) {
    resultDozens = `thirty`;
  } else if (dozens === 4) {
    resultDozens = `forty`;
  } else if (dozens === 5) {
    resultDozens = `fifty`;
  } else if (dozens === 6) {
    resultDozens = `sixty`;
  } else if (dozens === 7) {
    resultDozens = `seventy`;
  } else if (dozens === 8) {
    resultDozens = `eighty`;
  } else if (dozens === 9) {
    resultDozens = `ninety`;
  }

  if (num === 0) {
    console.log(`zero`);
  } else if (num === 100) {
    console.log(`one hundred`);
  } else if (num === 10) {
    console.log(`ten`);
  } else if (num === 11) {
    console.log(`eleven`);
  } else if (num === 12) {
    console.log(`twelve`);
  } else if (num === 13) {
    console.log(`thirteen`);
  } else if (num === 14) {
    console.log(`fourteen`);
  } else if (num === 15) {
    console.log(`fifteen`);
  } else if (num === 16) {
    console.log(`sixteen`);
  } else if (num === 17) {
    console.log(`seventeen`);
  } else if (num === 18) {
    console.log(`eighteen`);
  } else if (num === 19) {
    console.log(`nineteen`);
  } else if (dozens !== 0 && units === 0) {
    console.log(`${resultDozens}`);
  } else if (num > 0 && num <= 9) {
    console.log(resultUnits);
  } else if (num < 0 || num > 100) {
    console.log("invalid number");
  } else {
    console.log(`${resultDozens} ${resultUnits}`);
  }
}
numberFrom0To100ToText([`9`]);
