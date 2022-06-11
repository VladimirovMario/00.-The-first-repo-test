function sums3Numbers(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);

  if (a + b === c) {
    if (a < b) {
      console.log(`${a} + ${b} = ${c}`);
    } else {
      console.log(`${b} + ${a} = ${c}`);
    }
  } else if (a + c === b) {
    if (a < c) {
      console.log(`${a} + ${c} = ${b}`);
    } else {
      console.log(`${c} + ${a} = ${b}`);
    }
  } else if (b + c === a) {
    if (b < c) {
      console.log(`${b} + ${c} = ${a}`);
    } else {
      console.log(`${c} + ${b} = ${a}`);
    }
  } else {
    console.log(`No`);
  }
}
sums3Numbers([`3`, `5`, `2`]);
sums3Numbers([`2`, `4`, `2`]);
sums3Numbers([`1`, `1`, `5`]);
