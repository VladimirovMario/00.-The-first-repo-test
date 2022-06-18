function stringRepeater(input) {
  let index = 0;
  let str = input[index];
  let count = Number(input[1]);

  function printString(str, count) {
    let repeatString = ``;
    for (let i = 1; i <= count; i++) {
      repeatString += str;
    }

    return repeatString;
  }

  console.log(printString(str, count));
}
stringRepeater([`Hello `, `5`]);
