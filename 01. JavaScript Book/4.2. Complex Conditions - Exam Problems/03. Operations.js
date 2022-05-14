function operations(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operator = input[2];

  let result = 0;
  let num = ``;

  if (operator === `+`) {
    result = n1 + n2;
    if (result % 2 === 0) {
      num = `even`;
      console.log(`${n1} ${operator} ${n2} = ${result} - ${num}`);
    } else {
      num = `odd`;
      console.log(`${n1} ${operator} ${n2} = ${result} - ${num}`);
    }
  } else if (operator === `-`) {
    result = n1 - n2;
    if (result % 2 === 0) {
      num = `even`;
      console.log(`${n1} ${operator} ${n2} = ${result} - ${num}`);
    } else {
      num = `odd`;
      console.log(`${n1} ${operator} ${n2} = ${result} - ${num}`);
    }
  } else if (operator === `*`) {
    result = n1 * n2;
    if (result % 2 === 0) {
      num = `even`;
      console.log(`${n1} ${operator} ${n2} = ${result} - ${num}`);
    } else {
      num = `odd`;
      console.log(`${n1} ${operator} ${n2} = ${result} - ${num}`);
    }
  } else if (operator === `/`) {
    if (n2 === 0) {
      console.log(`Cannot divide ${n1} by zero`);
    } else {
      result = n1 / n2;
      console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    }
  } else if (operator === `%`) {
    if (n2 === 0) {
      console.log(`Cannot divide ${n1} by zero`);
    } else {
      result = n1 % n2;
      console.log(`${n1} % ${n2} = ${result}`);
    }
  }
}
operations([`10`, `1`, `-`]);
operations([`123`, `12`, `/`]);
operations([`10`, `12`, `+`]);
operations([`7`, `3`, `*`]);
operations([`10`, `3`, `%`]);
operations([`112`, `0`, `/`]);
operations([`60`, `0`, `%`]);
