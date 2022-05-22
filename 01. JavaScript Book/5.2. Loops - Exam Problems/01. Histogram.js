function histogram(input) {
  let index = 0;
  let num = Number(input[index]);
  index++;

  let p1Counter = 0;
  let p2Counter = 0;
  let p3Counter = 0;
  let p4Counter = 0;
  let p5Counter = 0;

  let currentNum = 0;

  for (let i = 1; i <= num; i++) {
    currentNum = Number(input[index]);
    index++;
    if (currentNum < 200) {
      p1Counter++;
    } else if (currentNum <= 399) {
      p2Counter++;
    } else if (currentNum <= 599) {
      p3Counter++;
    } else if (currentNum <= 799) {
      p4Counter++;
    } else if (currentNum >= 800) {
      p5Counter++;
    }
  }
  let p1Percentage = (p1Counter / num) * 100;
  let p2Percentage = (p2Counter / num) * 100;
  let p3Percentage = (p3Counter / num) * 100;
  let p4Percentage = (p4Counter / num) * 100;
  let p5Percentage = (p5Counter / num) * 100;

  console.log(`${p1Percentage.toFixed(2)}%`);
  console.log(`${p2Percentage.toFixed(2)}%`);
  console.log(`${p3Percentage.toFixed(2)}%`);
  console.log(`${p4Percentage.toFixed(2)}%`);
  console.log(`${p5Percentage.toFixed(2)}%`);
}
histogram([`3`, `1`, `2`, `999`]);
console.log(`---`);
histogram([
  "14",
  "53",
  "7",
  "56",
  "180",
  "450",
  "920",
  "12",
  "7",
  "150",
  "250",
  "680",
  "2",
  "600",
  "200",
]);
console.log(`---`);
histogram([`7`, `800`, `801`, `250`, `199`, `399`, `599`, `799`]);
console.log(`---`);
histogram([`9`, `367`, `99`, `200`, `799`, `999`, `333`, `555`, `111`, `9`]);
