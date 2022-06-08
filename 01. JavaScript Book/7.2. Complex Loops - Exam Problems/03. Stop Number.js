function stopNumber(input) {
  let endNum = Number(input[0]);
  let startNum = Number(input[1]);
  let stopNum = Number(input[2]);
  let result = ``;

  for (let i = startNum; i >= endNum; i--) {
    if (i % 2 === 0 && i % 3 === 0) {
      if (i !== stopNum) {
        result = result.concat(`${i} `);
      } else if (i === stopNum) {
        break;
      }
    }
  }
  console.log(result);
}
// stopNumber([`1`, `30`, `15`]);
// stopNumber([`1`, `36`, `12`]);
stopNumber([`20`, `1000`, `36`]);
