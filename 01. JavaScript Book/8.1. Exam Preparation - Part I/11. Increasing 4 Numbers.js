function increasing4Numbers(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let count = 0;

  for (let n1 = a; n1 <= b; n1++) {
    for (let n2 = n1 + 1; n2 <= b; n2++) {
      for (let n3 = n2 + 1; n3 <= b; n3++) {
        for (let n4 = n3 + 1; n4 <= b; n4++) {
          count++;
          if (count !== 0) {
            console.log(`${n1} ${n2} ${n3} ${n4}`);
          }
        }
      }
    }
  }
  if (count === 0) {
    console.log(`No`);
  }
}
increasing4Numbers([`3`, `7`]);
 increasing4Numbers([`5`, `7`])
