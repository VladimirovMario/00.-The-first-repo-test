function histogram(input) {
  let nCount = Number(input[0]);
  let p1Counter = 0;
  let p2Counter = 0;
  let p3Counter = 0;
  let p4Counter = 0;
  let p5Counter = 0;

  for (let i = 1; i <= nCount; i++) {
    let x = Number(input[i]);
    if (x < 200) {
      p1Counter++;
    } else if (x >= 200 && x <= 399) {
      p2Counter++;
    } else if (x >= 400 && x <= 599) {
      p3Counter++;
    } else if (x >= 600 && x <= 799) {
      p4Counter++;
    } else {
      p5Counter++;
    }
  }
  let p1 = (p1Counter / nCount) * 100;
  let p2 = (p2Counter / nCount) * 100;
  let p3 = (p3Counter / nCount) * 100;
  let p4 = (p4Counter / nCount) * 100;
  let p5 = (p5Counter / nCount) * 100;

  console.log(p1.toFixed(2) + `%`);
  console.log(p2.toFixed(2) + `%`);
  console.log(p3.toFixed(2) + `%`);
  console.log(p4.toFixed(2) + `%`);
  console.log(p5.toFixed(2) + `%`);
}
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
