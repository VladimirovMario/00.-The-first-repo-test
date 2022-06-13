function generateRectangles(input) {
  //321 page.

  let n = Number(input[0]);
  let m = Number(input[1]);
  let count = 0;

  for (let left = -n; left < n; left++) {
    for (let top = -n; top < n; top++) {
      for (let right = left + 1; right <= n; right++) {
        for (let bottom = top + 1; bottom <= n; bottom++) {
          let area = Math.abs(right - left) * Math.abs(bottom - top);
          if (area >= m) {
            console.log(`(${left}, ${top}) (${right}, ${bottom}) -> ${area}`);
            count++;
          }
        }
      }
    }
  }
  if (count === 0) {
    console.log(`No`);
  }
}
generateRectangles([`3`, `36`]);
