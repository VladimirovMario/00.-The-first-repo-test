function changeTiles(input) {
  let n = Number(input[0]);
  let w = Number(input[1]);
  let l = Number(input[2]);
  let m = Number(input[3]);
  let o = Number(input[4]);

  let landing = n * n;
  let tiles = w * l;
  let bench = m * o;
  let time = 0.2;

  let tilesNedeed = (landing - bench) / tiles;
  let timeNedeed = tilesNedeed * time;

  console.log(Math.round(tilesNedeed * 100) / 100);
  console.log(Math.round(timeNedeed * 100) / 100);
}
changeTiles([`40`, `0.8`, `0.6`, `3`, `5`]);
