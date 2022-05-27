function christmasTree(input) {
  let num = Number(input[0]);

  for (let i = 0; i <= num; i++) {
    let spaces = ` `.repeat(num - i);
    let stars = `*`.repeat(i);
    let body = ` | `;
    let row = spaces + stars + body + stars + spaces;

    console.log(row);
  }
}
christmasTree([`4`]);
